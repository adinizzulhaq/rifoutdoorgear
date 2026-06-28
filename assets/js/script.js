const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
