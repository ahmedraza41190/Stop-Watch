var hr = document.getElementById('hr')
var min = document.getElementById('min')
var sec = document.getElementById('sec')
var miliSec = document.getElementById('miliSec')

var hours = 0;
var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var interval;


// -------------------For "Start"------------------------------
function started() {

    interval = setInterval(function () {
        miliSeconds++
        miliSec.innerHTML = miliSeconds
        if (miliSeconds >= 100) {
            seconds++
            sec.innerHTML = seconds
            miliSeconds = 0
        }

    }, 10)
    setInterval(function () {
        if (seconds >= 60) {
            minutes++
            min.innerHTML = minutes
            seconds = 0
        }
    }, 1000)
    setInterval(function () {
        if (minutes >= 60) {
            hours++
            hr.innerHTML = hours
            minutes = 0
        }
    }, 1000)
    document.getElementById('btn').disabled = true;
}

// -------------------For "Stoped"------------------------------

function stoped() {
    clearInterval(interval)
    document.getElementById('btn').disabled = false;
}

// -------------------For "Reset"------------------------------

function reset() {
    document.getElementById('btn').disabled = false;
    miliSec.innerHTML = 0
    sec.innerHTML = 0
    min.innerHTML = 0
    clearInterval(interval)
}