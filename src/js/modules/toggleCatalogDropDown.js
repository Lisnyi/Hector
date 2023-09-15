export function toggleCatalogDropDown () {
    const catalogDropDown = document.querySelector('.catalog-drop-down')
    const openButton = document.querySelector('[data-catalog-drop-down__button="open"]')
    const closeButton = document.querySelector('[data-catalog-drop-down__button="close"]')

    function onEscapeClose (e) {
        if (e.key === "Escape") {
            closeDropDown()
        }
    }

    function onBackDropClose (e) {
        if (!e.target.closest('.catalog-drop-down') && !e.target.classList.contains('nav-link')) {
            closeDropDown()
        }
    }

    function closeDropDown () {
        catalogDropDown.classList.add('no-display')
        document.removeEventListener('keydown', onEscapeClose)
        document.removeEventListener('click', onBackDropClose)
    }

    function openDropDown () {
        catalogDropDown.classList.remove('no-display')
        document.addEventListener('keydown', onEscapeClose)
        document.addEventListener('click', onBackDropClose)
    }

    openButton.addEventListener('click', openDropDown)
    closeButton.addEventListener('click', closeDropDown)    
}