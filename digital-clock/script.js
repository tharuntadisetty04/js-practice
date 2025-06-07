const clock = document.getElementById("clock");
const utc = document.getElementById("utc");

utc.innerText = new Date().toTimeString().slice(19, 38);

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  clock.innerText = currentTime;
}, 1000);
