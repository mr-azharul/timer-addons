function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var meridiem = "AM";
    m = checkTime(m);
    s = checkTime(s);
    if (h === 0) {
        h = 12;    
    }
    if (h > 12) {
        h = h - 12;
        meridiem = "PM";
    }
        document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + " " + meridiem;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}