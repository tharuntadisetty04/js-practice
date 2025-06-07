const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value) / 100;
  const weight = parseInt(document.getElementById("weight").value);

  const result = document.getElementById("result");
  const error = document.getElementById("error");

  if (height === "" || height < 0 || isNaN(height)) {
    error.innerHTML = "Please give a valid height";
    return;
  }

  if (!weight === "" || weight < 0 || isNaN(weight)) {
    error.innerHTML = "Please give a valid weight";
    return;
  }

  const bmi = weight / height ** 2;
  let hexCode;

  if (bmi < 18.6) {
    hexCode = "#7b9df4";
  } else if (bmi < 24.9) {
    hexCode = "#49c5b6";
  } else if (bmi < 39.9) {
    hexCode = "#f7b94c";
  } else {
    hexCode = "#f97b77";
  }

  result.style.color = hexCode;
  result.textContent = bmi.toFixed(1);
});
