const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalRef;
const startChangingColor = () => {
  if (!intervalRef) {
    intervalRef = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 100);
  }
};

const stopChangingColor = () => {
  clearInterval(intervalRef);
  intervalRef = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
