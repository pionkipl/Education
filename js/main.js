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
let validFlag;
let form = document.querySelector("form");

let p = document.createElement("p");

subscribeButton.addEventListener("click", validateEmail);

function validateEmail(e) {
  let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,20})+$/;
  if (inputMail.value.match(validation)) {
    inputMail.style.borderBottom = "1px solid green";
    validFlag = true;
  } else {
    inputMail.style.borderBottom = "1px solid red";
    validFlag = false;
  }

  form.appendChild(p);

  if (validFlag === true) {
    p.innerText = "Thank you for signing up";
    p.style.color = "#27ae61";
    p.style.fontSize = "1.4rem";
  } else {
    p.innerText = "Email address incorrect";
    p.style.color = "red";
    p.style.fontSize = "1.4rem";
  }
  e.preventDefault();
}

// Validation email animation

let subscribeLabel = document.querySelector(".subscribe__items-label");
let subscribeInput = document.querySelector(".subscribe__items-input");

subscribeInput.addEventListener("mouseout", checkingValue);
subscribeInput.addEventListener("focus", checkingFocusIn);
subscribeInput.addEventListener("focusout", checkingFocusOut);

function checkingValue() {
  if (subscribeInput.value !== "" && window.innerWidth <= 767) {
    subscribeLabel.style.fontSize = "1.3rem";
    subscribeLabel.style.top = "2rem";
  } else if (subscribeInput.value !== "") {
    subscribeLabel.style.fontSize = "1.3rem";
    subscribeLabel.style.top = "0";
  }
}

function checkingFocusIn() {
  if (window.innerWidth <= 767) {
    subscribeLabel.style.fontSize = "1.3rem";
    subscribeLabel.style.top = "2rem";
  } else {
    subscribeLabel.style.fontSize = "1.3rem";
    subscribeLabel.style.top = "0";
  }
}

function checkingFocusOut() {
  if (subscribeInput.value === "" && window.innerWidth <= 767) {
    subscribeLabel.style.fontSize = "1.7rem";
    subscribeLabel.style.top = "4.5rem";
    console.log("siema");
  } else if (subscribeInput.value === "") {
    subscribeLabel.style.fontSize = "1.7rem";
    subscribeLabel.style.top = "2rem";
  }
}

// Maps

var map = L.map("map").setView([52.4158, 16.931], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.4158, 16.931])
  .addTo(map)
  .bindPopup("Best education school")
  .openPopup();
