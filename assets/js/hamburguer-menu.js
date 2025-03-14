const hamburguerMenu = document.getElementById('hamburguerMenu')
const menuOpen = document.getElementById('menuOpen')
const menuClose = document.getElementById('menuClose')


function openMenu() {
    hamburguerMenu.style.display = 'flex'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'

    
}
function closeMenu() {
    hamburguerMenu.style.display = 'none'
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
}



