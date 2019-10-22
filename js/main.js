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





