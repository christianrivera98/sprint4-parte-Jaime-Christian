function currentTime() {
  const hourElement = document.getElementById("hour");
  const currentHour = new Date();

  const hour = currentHour.getHours();
  const minutes = currentHour.getMinutes();
  const second = currentHour.getSeconds();

  const formedTime = `${hour}:${minutes}:${second}`;

  hourElement.textContent = formedTime;
}

setInterval(currentTime, 1000);

export default currentTime();
