let helper = document.querySelector(".helper");
let teacher = document.querySelectorAll(".teacher__item");
let teacherMobile = document.querySelector(".teacher-mobile");

window.addEventListener("resize", resize);

function resize() {
  let w = window.innerWidth;
  let hidden = document.querySelector(".hidden");
  if (w >= 1800) {
    helper.innerText = "big-desktop";
  } else if (w > 1000 && w <= 1200) {
    helper.innerText = "tab-land";
  } else if (w > 767 && w <= 1000) {
    helper.innerText = "tab-port";
  } else if (w > 600 && w <= 767) {
    helper.innerText = "phone-big";
  } else if (w <= 600) {
    helper.innerText = "phone";
  } else {
    helper.innerText = "desktop";
  }

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
