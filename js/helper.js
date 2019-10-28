
const teacher = document.querySelectorAll(".teacher__item");
const teacherMobile = document.querySelector(".teacher-mobile");
const myLinkTeachers = document.querySelector('.link-teachers');
const hidden = document.querySelector(".hidden");

window.addEventListener("resize", resize);

function resize() {
  let w = window.innerWidth;

  if (w <= 767) {
    hidden.style.display = "none";
    teacherMobile.style.display = "flex";
    teacher.forEach(function(el) {
      el.style.justifyContent = "center";
      el.style.paddingBottom = "3rem";
    });
  } else {
    hidden.style.display = "flex";
    teacherMobile.style.display = "none";
    teacher.forEach(function(el) {
      el.style.justifyContent = "";
    });
  }
}

resize();

if (hidden.style.display === "none") {
  myLinkTeachers.setAttribute('href', '#teachers-mobile');
} else {
  myLinkTeachers.setAttribute('href', '#teachers');
}





