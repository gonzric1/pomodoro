let timeLeft;
let ticking = false;

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
            } else if (ticking && timeLeft <= 0) {
                playAudio();
                clearInterval(countdown);
            } else {
                clearInterval(countdown);
            }
        }, 1000);
    }
}

function updateTime() {
    let minutes = Math.floor(timeLeft / 60000);
    let seconds = Math.floor((timeLeft % 60000) / 1000);
    let el = document.getElementById('clock')
    let t = String(minutes) + ":" + String(seconds).padStart(2, '0');
    el.innerHTML = document.title = t;
}

function setTimer(time) {
    timeLeft = time * 60000;
    ticking = false;
    updateTime();
}

function playAudio() {
    let alarm = document.getElementById("alarmSound");
    alarm.play();
}

window.onload = () => {
    setTimer(25);
    updateTime();
};