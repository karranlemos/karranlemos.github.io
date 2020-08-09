class MainMenu {

    constructor() {
        this.MIN_PINNED_NAVBAR = 50

        this.navbar = document.getElementById('main-menu')
        if (!this.navbar)
            throw 'Main menu not found'

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > this.MIN_PINNED_NAVBAR)
                this.navbar.classList.add('pinned')
            else
                this.navbar.classList.remove('pinned')
        }.bind(this))
    }
}


var scriptObjects = {}
window.addEventListener('load', () => {
    scriptObjects.mainMenu = new MainMenu()
})