const nav = document.querySelector('.navList');
const burger = document.querySelector('.burger');
let navLinks = document.querySelectorAll('.nav__item');

function BurgerClick() {
  nav.classList.toggle('navList_activ');
  burger.classList.toggle('activ');
  navLinks.forEach((link, index)=>{
if (link.style.animation){
link.style.animation= " ";
  }else {
    link.style.animation = `navLinkAnim 1.5s ease forward ${index / 7 + 0.3}s`
  }

  });

}