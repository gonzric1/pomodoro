var timeLeft;
var ticking = false;

function init() {
    setTimer(25);
    updateTime();
}

function pauseTimer() {
    ticking = false;
}

function startTimer() {
    if (!ticking) {
        ticking = true;
        let countdown = setInterval(() => {
            if (ticking && timeLeft > 0) {
                timeLeft -= 1000;
                updateTime();
            } else {
                clearInterval(countdown);
            }
        }, 1000);
    }
}

function updateTime() {
    let minutes = Math.floor(timeLeft / 60000);
    let seconds = Math.floor((timeLeft % 60000) / 1000);
    var el = document.getElementById('clock')
    let t = String(minutes) + ":" + String(seconds).padStart(2, '0');
    el.innerHTML = t;
    document.title = t;
}

function setTimer(time) {
    timeLeft = time * 60000;
    ticking = false;
    updateTime();
}

window.onload = () => {
    init()
};