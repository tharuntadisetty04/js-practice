const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const reset = document.getElementById("reset");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    body.style.backgroundColor = "#" + e.target.id;
  });
});

reset.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
