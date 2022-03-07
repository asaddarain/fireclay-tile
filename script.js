const openMainMenuElement = document.getElementById('open-main-menu')
const closeMainMenuElement = document.getElementById('close-main-menu')
const mainMenuElement = document.getElementById('mobile-menu')

function openMenu() {
    mainMenuElement.style.display = 'block'
    closeMainMenuElement.style.display = 'block'
    openMainMenuElement.style.display = 'none'
}

function closeMenu() {
    mainMenuElement.style.display = 'none'
    closeMainMenuElement.style.display = 'none'
    openMainMenuElement.style.display = 'block'
}

openMainMenuElement.addEventListener('click', openMenu)
closeMainMenuElement.addEventListener('click', closeMenu)
