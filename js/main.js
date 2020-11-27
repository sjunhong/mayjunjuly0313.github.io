'use strict';

const toggleBtn = document.querySelector('.navbar__icon');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarLinks = document.querySelector('.navbar__links');
let narbar = document.querySelector('.navbar');
let sticky = narbar.offsetTop;

function stickyNav(){
  if(window.pageYOffset >= sticky + 20){
    narbar.classList.add('sticky');
  }
  else{
    narbar.classList.remove('sticky');
  }
}

window.onscroll = function(){stickyNav()};

toggleBtn.addEventListener("click", ()=>{
  navbarMenu.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});