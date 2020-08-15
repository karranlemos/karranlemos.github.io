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

        this.homeButtons = this.navbar.querySelectorAll('.home-button')
        // Uses JS to send to the top of the page so it doesn't display
        // domain.com/#top
        for (let homeButton of this.homeButtons) {
            homeButton.addEventListener('click', function() {
                this.closeMobileMenu()
                this.goToTopOfPage()
            }.bind(this))
            var anchor = homeButton.querySelector('a')
            if (anchor) {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault()
                })
            }
        }

        this.subpagesButtons = this.menuOptions.getElementsByClassName('menu-button')
        for (let subpagesButton of this.subpagesButtons) {
            subpagesButton.addEventListener('click', function() {
                this.closeMobileMenu()
            }.bind(this))
        }
        
        this.mobileButton.addEventListener('click', this.toggleMobileMenu.bind(this))
        window.addEventListener('scroll', this.checkNavbarFixed.bind(this))
        
        this.forceHashJump()

        this.checkNavbarFixed()
    }

    toggleMobileMenu() {
        this.navbar.classList.toggle('mobile-open')
    }

    closeMobileMenu() {
        this.navbar.classList.remove('mobile-open')
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
        history.pushState(null, null, '/')
    }



    forceHashJump() {
        if (window.location.hash !== '')
            window.location.hash = window.location.hash
    }
}


class Modal {

    constructor(modal) {
        this.modal = modal
        this.modalViewport = this.modal.querySelector('div.modal-viewport')
        if (!this.modalViewport)
            throw 'modal-viewport not found'
        
        var popupWrappersDivs = this.modal.querySelectorAll('div.modal-popup-wrapper')
        
        this.popupWrappers = new Set()
        for (let popupWrapperDiv of popupWrappersDivs) {
            var closeDiv = popupWrapperDiv.querySelector('div.close')
            if (closeDiv)
                closeDiv.addEventListener('click', this.closeModal.bind(this))

            this.popupWrappers.add(popupWrapperDiv)
        }

        this.modal.addEventListener('click', function(e) {
            if ([this.modal, this.modalViewport].includes(e.target))
                this.closeModal()
        }.bind(this))
    }

    closeModal() {
        this.modal.classList.remove('show')
        for (let wrapper of this.popupWrappers)
            wrapper.classList.remove('show')
    }

    openModal(wrapper) {
        if (!this.popupWrappers.has(wrapper))
            throw 'Wrapper not in list'
        
        this.modal.classList.add('show')
        wrapper.classList.add('show')
    }



    static getAllModals() {
        var modalDivs = document.querySelectorAll('div.modal')
        var modals = []
        for (let modalDiv of modalDivs) {
            try {
                modals.push(new Modal(modalDiv))
            }
            catch (e) {
                continue
            }
        }
        return modals
    }
}


class PortfolioModals {

    constructor(modals=null) {
        if (!modals)
            modals = Modal.getAllModals()
        if (modals.length < 1)
            return
        this.modals = modals
        
        var galleryItemsDiv = document.querySelectorAll('div.gallery.portfolio div.gallery-item')
        if (galleryItemsDiv.length < 1)
            return
        
        this.galleryItems = {}
        for (let galleryItemDiv of galleryItemsDiv) {
            if (!galleryItemDiv.hasAttribute('data-gallery-item'))
                continue
            this.galleryItems[galleryItemDiv.getAttribute('data-gallery-item')] = galleryItemDiv
        }

        this.linkedGalleryItems = new Set()
        for (let modal of this.modals) {
            for (let wrapper of modal.popupWrappers) {
                if (!wrapper.hasAttribute('data-gallery-item'))
                    continue
                let galleryItemCode = wrapper.getAttribute('data-gallery-item')

                if (this.linkedGalleryItems.has(galleryItemCode))
                    continue

                if (!this.galleryItems.hasOwnProperty(galleryItemCode))
                    continue
                let galleryItem = this.galleryItems[galleryItemCode]

                galleryItem.addEventListener('click', function() {
                    modal.openModal(wrapper)
                })

                this.linkedGalleryItems.add(galleryItemCode)
            }
        }
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
    scriptObjects.modals = Modal.getAllModals()
    scriptObjects.portfolioModals = new PortfolioModals(scriptObjects.modals)
})