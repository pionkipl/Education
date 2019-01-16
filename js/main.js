// Hamburger

const wrapperMenu = document.querySelector(".wrapper-menu");
const menuHamb = document.querySelector(".hide");
const list = document.querySelector(".list");

wrapperMenu.addEventListener("click", anim);

function anim() {
  wrapperMenu.classList.toggle("open");
  menuHamb.classList.toggle("hide");
  list.classList.toggle("open-menu");
}
