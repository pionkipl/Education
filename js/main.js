// Hamburger

const wrapperMenu = document.querySelector(".wrapper-menu");
const menuHamb = document.querySelector(".hide");
const list = document.querySelector(".list");
let lineMenu = document.querySelectorAll(".line-menu");

const linkEducation = document.querySelector(".link-education");
const linkFeatures = document.querySelector(".link-features");
const linkCourses = document.querySelector(".link-courses");
const linkTeachers = document.querySelector(".link-teachers");
const LinktTeachersMobile = document.querySelector(".teacher-mobile");
const linkPrograms = document.querySelector(".link-programs");
const linkContact = document.querySelector(".link-contact");

// window.addEventListener("resize", checkWidth);

function checkWidth() {
  let w = window.innerWidth;

  if (w <= 1000) {
    linkEducation.addEventListener("click", anim);
    linkFeatures.addEventListener("click", anim);
    linkCourses.addEventListener("click", anim);
    linkTeachers.addEventListener("click", anim);
    LinktTeachersMobile.addEventListener("click", anim);
    linkPrograms.addEventListener("click", anim);
    linkContact.addEventListener("click", anim);
    console.log("siema");
  }
}

checkWidth();

wrapperMenu.addEventListener("click", anim);

function anim() {
  wrapperMenu.classList.toggle("open");
  menuHamb.classList.toggle("hide");
  list.classList.toggle("open-menu");

  if (wrapperMenu.classList.contains("open")) {
    lineMenu.forEach(function(el) {
      el.style.boxShadow = "none";
    });
  } else {
    lineMenu.forEach(function(el) {
      el.style.boxShadow = "0 0 1px 1px #1a1a1a";
    });
  }
}

// Validation
let inputMail = document.querySelector(".subscribe__items-input");
let subscribeButton = document.querySelector(".subscribe-button");
let contactButton = document.querySelector(".contact-button");
let validFlag;
let formSubscribe = document.querySelector(".subscribe__form");
let formContact = document.querySelector(".contact__form");
let inputContactName = document.querySelector(".contact__form__input--name");
let inputContactEmail = document.querySelector(".contact__form__input--mail");
let textareaContact = document.querySelector(".contact__form__textarea");

let flagEmail;
let flag;

subscribeButton.addEventListener("click", validateSubscribeEmail);
contactButton.addEventListener("click", validateContactEmail);
contactButton.addEventListener("click", validateFullName);
contactButton.addEventListener("click", validateMessage);
contactButton.addEventListener("click", validateSend);

let p = document.createElement("p");

function validateSubscribeEmail(e) {
  let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,20})+$/;
  if (inputMail.value.match(validation)) {
    inputMail.style.borderBottom = "1px solid green";
    validFlag = true;
  } else {
    inputMail.style.borderBottom = "1px solid red";
    validFlag = false;
  }

  formSubscribe.appendChild(p);

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

let contactEmailParagraph = document.createElement("p");
formContact.insertBefore(contactEmailParagraph, formContact.children[2]);

function validateContactEmail(e) {
  let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,20})+$/;

  if (inputContactEmail.value.match(validation)) {
    inputContactEmail.style.borderBottom = "1px solid green";
    inputContactEmail.style.color = "green";
    flagEmail = true;
  } else {
    inputContactEmail.style.borderBottom = "1px solid red";
    inputContactEmail.style.color = "red";
    flagEmail = false;
  }

  if (flagEmail === false) {
    contactEmailParagraph.innerText = "Email address incorrect";
    contactEmailParagraph.style.color = "red";
    contactEmailParagraph.style.fontSize = "1.4rem";
    contactEmailParagraph.style.marginTop = "-1.5rem";
    contactEmailParagraph.style.marginBottom = "1.5rem";
  } else {
    contactEmailParagraph.style.display = "none";
  }
  e.preventDefault();
}

let contactNameParagraph = document.createElement("p");
formContact.insertBefore(contactNameParagraph, formContact.children[1]);

function validateFullName(e) {
  let validation = /([a-zA-Z])\w+/g;

  if (inputContactName.value.match(validation)) {
    inputContactName.style.borderBottom = "1px solid green";
    inputContactName.style.color = "green";
    flag = true;
  } else {
    inputContactName.style.borderBottom = "1px solid red";
    inputContactName.style.color = "red";
    flag = false;
  }

  if (flag === false) {
    contactNameParagraph.innerText = "Name is incorrect";
    contactNameParagraph.style.color = "red";
    contactNameParagraph.style.fontSize = "1.4rem";
    contactNameParagraph.style.marginTop = "-1.5rem";
    contactNameParagraph.style.marginBottom = "1.5rem";
  } else {
    contactNameParagraph.style.display = "none";
  }

  e.preventDefault();
}

let contactMessageParagraph = document.createElement("p");

function validateMessage(e) {
  if (textareaContact.value === "") {
    textareaContact.after(contactMessageParagraph);
    contactMessageParagraph.innerText = "No text in Message";
    contactMessageParagraph.style.color = "red";
    contactMessageParagraph.style.fontSize = "1.4rem";
  } else {
    contactMessageParagraph.style.display = "none";
  }
  e.preventDefault();
}

let validInfo = document.createElement("p");

function validateSend(e) {
  if (flagEmail && flag && textareaContact.value !== "") {
    textareaContact.after(validInfo);
    let name = inputContactName.value;
    validInfo.innerHTML = `<p style="font-size: 2rem; background-color: #27ae61; margin-top: 2rem; color: white; padding: 1rem"> Thank you <span style="color: #620ff5; font-weight: 700">${name}</span> for sending us the message </p>`;

    inputContactName.style.borderBottom = "1px solid black";
    inputContactName.style.color = "black";
    inputContactName.value = "";
    inputContactEmail.style.borderBottom = "1px solid black";
    inputContactEmail.style.color = "black";
    inputContactEmail.value = "";
    textareaContact.value = "";
  }

  setTimeout(() => {
    validInfo.innerHTML = "";
  }, 5000);
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
