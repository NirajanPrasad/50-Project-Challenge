const openIcon = document.querySelector(".open");
const closeIcon = document.querySelector(".close");

const screen = document.querySelector(".section");
const nav = document.querySelector(".nav");

const circle = document.querySelector(".icon_tab");

circle.addEventListener("click", () => {
  circle.classList.toggle("active");
  if (circle.classList.contains("active")) {
    screen.style.rotate = "-20deg";
    nav.style.display = "block";
  } else if (!circle.classList.contains("active")) {
    screen.style.rotate = "0deg";
    nav.style.display = "none";
  }
});
