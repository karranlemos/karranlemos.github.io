class MainMenu {

    constructor() {
        this.PAGE_PARAMETER = 'page'

        this.navbar = document.getElementById('main-menu')
        if (!this.navbar)
            throw 'Main menu not found'
        this.mobileButton = this.navbar.querySelector('.mobile-button')
        if (!this.mobileButton)
            throw 'Mobile button not found'
        this.menuOptions = this.navbar.querySelector('.menu-options')
        if (!this.menuOptions)
            throw 'Menu options not found'

        this.homeButton = this.navbar.querySelector('.home-button')
        if (this.homeButton) {
            this.homeButton.addEventListener('click', this.goToTopOfPage.bind(this))
        }

        this.subpagesIds = {}
        this.subpagesButtons = this.menuOptions.getElementsByClassName('menu-button')
        for (let subpagesButton of this.subpagesButtons) {
            let sectionId = subpagesButton.getAttribute('data-section-id')
            if (!sectionId)
                continue
            let section = document.getElementById(sectionId)
            if (!section)
                continue
            this.subpagesIds[sectionId] = section
            subpagesButton.addEventListener('click', function() {
                this.goToSection(sectionId)
            }.bind(this))
        }
        
        this.mobileButton.addEventListener('click', this.toggleMobileMenu.bind(this))
        window.addEventListener('scroll', this.checkNavbarFixed.bind(this))

        this.goToSection(this.getPageParameter())

        this.checkNavbarFixed()
    }

    toggleMobileMenu() {
        this.navbar.classList.toggle('mobile-open')
    }

    checkNavbarFixed() {
        const MIN_PINNED_NAVBAR = 50
        if (window.pageYOffset > MIN_PINNED_NAVBAR)
            this.navbar.classList.add('pinned')
        else
            this.navbar.classList.remove('pinned')
    }

    goToTopOfPage() {
        window.scrollTo(0, 0)
        this.deletePageParameter()
    }

    goToSection(sectionId) {
        const NAVBAR_HEIGHT_PINNED = 80

        if (!this.subpagesIds.hasOwnProperty(sectionId))
            return

        var sectionY = this.subpagesIds[sectionId].offsetTop
        
        var oldX = window.pageXOffset
        var newY = sectionY-NAVBAR_HEIGHT_PINNED
        
        window.scrollTo(oldX, newY)
        this.setPageParameter(sectionId)
    }



    setPageParameter(sectionId) {
        var queryParams = new URLSearchParams(window.location.search)
        queryParams.set(this.PAGE_PARAMETER, sectionId)
        history.replaceState(null, null, "?"+queryParams.toString())
    }

    deletePageParameter() {
        var queryParams = new URLSearchParams(window.location.search)
        queryParams.delete(this.PAGE_PARAMETER)
        
        if (queryParams.toString() !== '')
            history.replaceState(null, null, queryParams.toString())
        else
            history.replaceState(null, null, window.location.href.split('?')[0])
    }

    getPageParameter(sectionId) {
        var queryParams = new URLSearchParams(window.location.search);
        if (queryParams.has(this.PAGE_PARAMETER))
            return queryParams.get(this.PAGE_PARAMETER)
        return ''
    }
}



class Helpers {
    constructor() {
        throw 'Static class'
    }

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}



var scriptObjects = {}
window.addEventListener('load', () => {
    scriptObjects.mainMenu = new MainMenu()
})