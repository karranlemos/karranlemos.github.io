class MainMenu {

    constructor() {
        this.MIN_PINNED_NAVBAR = 50

        this.navbar = document.getElementById('main-menu')
        if (!this.navbar)
            throw 'Main menu not found'
        this.mobileButton = this.navbar.querySelector('.mobile-button')
        if (!this.mobileButton)
            throw 'Mobile button not found'
        this.menuOptions = this.navbar.querySelector('.menu-options')
        if (!this.menuOptions)
            throw 'Menu options not found'
        
        this.mobileButton.addEventListener('click', this.toggleMobileMenu.bind(this))

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > this.MIN_PINNED_NAVBAR)
                this.navbar.classList.add('pinned')
            else
                this.navbar.classList.remove('pinned')
        }.bind(this))
    }

    async toggleMobileMenu() {
        this.navbar.classList.toggle('mobile-open')
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