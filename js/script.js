class MainMenu {

    constructor() {
        

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
            this.homeButton.addEventListener('click', this.goToTopOfPage)
        }

        this.subpagesButtons = this.menuOptions.getElementsByClassName('menu-button')
        for (let subpagesButton of this.subpagesButtons) {
            let sectionId = subpagesButton.getAttribute('data-section-id')
            if (!sectionId)
                continue
            let section = document.getElementById(sectionId)
            if (!section)
                continue
            subpagesButton.addEventListener('click', function() {
                this.goToSection(section)
            }.bind(this))
        }
        
        this.mobileButton.addEventListener('click', this.toggleMobileMenu.bind(this))
        window.addEventListener('scroll', this.checkNavbarFixed.bind(this))
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
    }

    goToSection(section) {
        const NAVBAR_HEIGHT_PINNED = 80
        var sectionY = section.offsetTop
        
        var oldX = window.pageXOffset
        var newY = sectionY-NAVBAR_HEIGHT_PINNED
        
        window.scrollTo(oldX, newY)
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