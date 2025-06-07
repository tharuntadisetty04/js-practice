const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value) / 100;
  const weight = parseInt(document.getElementById("weight").value);
  const bmi = weight / height ** 2;

  const result = document.getElementById("result");
  result.innerText = bmi.toFixed(1);
});
