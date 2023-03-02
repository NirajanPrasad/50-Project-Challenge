const card = document.querySelectorAll(".card");

card.forEach((e) =>
  e.addEventListener("click", function () {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    } else {
      card.forEach((c) => c.classList.remove("active"));
      e.classList.add("active");
    }
  })
);

//not work for alreay active class
// card.forEach((e) =>
//   e.addEventListener("click", function () {
//     card.forEach((c) => c.classList.remove("active"));
//     e.classList.add("active");
//   })
// );
