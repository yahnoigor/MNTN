// const navBtn = document.querySelector(".nav-button");
// const mobileNav = document.querySelector(".mobile-nav");
// const body = document.body;

// //Клік по кнопці
// navBtn.addEventListener("click", function (event) {
//   event.stopPropagation();
//   mobileNav.classList.toggle("mobile-nav-active");
//   navBtn.classList.toggle("nav-button-close");
//   body.classList.toggle("no-scroll");
// });

// //Клік за межами навігації
// window.addEventListener("click", function () {
//   if (body.classList.contains("no-scroll")) {
//     body.classList.toggle("no-scroll");
//     navBtn.classList.toggle("nav-button-close");
//     mobileNav.classList.toggle("mobile-nav-active");
//   }
// });

// // Зупиняємо клік в середині мобільної навігації
// mobileNav.addEventListener("click", function (event) {
//   event.stopPropagation();
// });

//========================= cкорочуємо запис через функцію===============
const navBtn = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;

//Клік по кнопці
navBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMobileNav();
});

//Клік за межами навігації
window.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    toggleMobileNav();
  }
});

// Зупиняємо клік в середині мобільної навігації
mobileNav.addEventListener("click", function (event) {
  event.stopPropagation();
});

function toggleMobileNav() {
  mobileNav.classList.toggle("mobile-nav-active");
  navBtn.classList.toggle("nav-button-close");
  body.classList.toggle("no-scroll");
}
