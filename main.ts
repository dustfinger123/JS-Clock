function liveTime() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (hours >= 12) {
    hours = date.getHours() % 12;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("dayNight").innerHTML = "PM";
  }
}
setInterval(liveTime, 1000);

function currentDate() {
  let date = new Date();
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0"); // month is zero-indexed
  let year = date.getFullYear().toString();

  let currentDate = `${day}/${month}/${year}`;
  document.getElementById("currentDate").textContent = currentDate;

  let msUntillMidNight =
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0) -
    date;
  setTimeout(currentDate, msUntillMidNight);
}
currentDate();

