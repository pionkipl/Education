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

// Validation
let inputMail = document.querySelector(".subscribe__items-input");
let subscribeButton = document.querySelector(".subscribe-button");
subscribeButton.addEventListener("click", validateEmail);

function validateEmail(e) {
  let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,20})+$/;
  if (inputMail.value.match(validation)) {
    inputMail.style.borderBottom = "1px solid green";
  } else {
    inputMail.style.borderBottom = "1px solid red";
  }
  e.preventDefault();
}
