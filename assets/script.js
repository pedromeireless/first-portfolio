// MENU MOBILE

let mediaQueryPhone = window.matchMedia('(max-width: 739px)')
let menuHeader = document.getElementById('menuheader')
let menuHamburguer = document.getElementById('burguer')
let menuMobile = document.getElementById('menuMobile')
let closeMenuBtn = document.getElementById('closeButton')
let body = document.getElementsByClassName('content')[0]

function toggleMenu(e) {
    if (e.matches) { 
       menuHeader.style.display = 'none'
       menuHamburguer.style.display = 'block'
       
    } else {
       menuHeader.style.display = 'flex'
       menuHamburguer.style.display = 'none'
       menuMobile.style.display = 'none' 
       closeMenuBtn.style.display = 'none'
       body.style.filter = 'blur(0px)'
    }
}

toggleMenu(mediaQueryPhone)
mediaQueryPhone.addEventListener('change', toggleMenu)



// TOGGLE BUTTONS 
menuHamburguer.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', removeMenuMobile)

function changeBgInput(e) {
   e.style.backgroundColor = "#96b3f2"
}
function removeFocus(e) {
   e.style.backgroundColor = 'white'
}
function showMenu() {
   if (menuHamburguer.style.display = 'block') {
      menuMobile.style.display = 'block'
      closeMenuBtn.style.display = 'block'
      menuHamburguer.style.display = 'none'
      body.style.filter = 'blur(2px)'
   }
}
function removeMenuMobile() {
   if (menuMobile.style.display = 'block') {
      menuMobile.style.display = 'none'
      closeMenuBtn.style.display = 'none'
      menuHamburguer.style.display = 'block'
      body.style.filter = 'blur(0px)'
   }
}