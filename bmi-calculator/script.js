const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value) / 100;
  const weight = parseInt(document.getElementById("weight").value);

  const result = document.getElementById("result");
  const error = document.getElementById("error");

  if (height === "" || height < 0 || isNaN(height)) {
    error.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    error.innerHTML = "Please give a valid weight";
  } else {
    const bmi = weight / height ** 2;
    result.innerText = bmi.toFixed(1);
  }
});
