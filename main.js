function liveTime() {
    var date = new Date();
    var hours = date.getHours().toString().padStart(2, "0");
    var minutes = date.getMinutes().toString().padStart(2, "0");
    var seconds = date.getSeconds().toString().padStart(2, "0");
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
    var date = new Date();
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0"); // month is zero-indexed
    var year = date.getFullYear().toString();
    var currentDate = "".concat(day, "/").concat(month, "/").concat(year);
    document.getElementById("currentDate").textContent = currentDate;
    var msUntillMidNight = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0) -
        date;
    setTimeout(currentDate, msUntillMidNight);
}
currentDate();
