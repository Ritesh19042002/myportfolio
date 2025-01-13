const nav_toogle = document.querySelector(".nav_toogle");
const nav_list = document.querySelector(".nav_list");
const nav_link = document.querySelectorAll(".nav_link");

nav_toogle.addEventListener("click", () => {
  nav_list.classList.toggle("show");
  nav_toogle.querySelector("i").classList.toggle("fa-xmark");
  nav_toogle.querySelector("i").classList.toggle("fa-bars");
});

nav_link.forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      nav_list.classList.toggle("show");
      nav_toogle.querySelector("i").classList.toggle("fa-xmark");
      nav_toogle.querySelector("i").classList.toggle("fa-bars");
    }
  });
});
