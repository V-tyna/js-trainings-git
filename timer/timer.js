let countSec = 0;
let changeTime;
const displayTimer = document.querySelector('.clock');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

function timer() {
    let hours = Math.floor(countSec / 3600);
    let minutes = Math.floor((countSec % 3600) / 60);
    let seconds = Math.floor(countSec % 60);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    displayTimer.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    countSec++;
}

startBtn.addEventListener('click', () => {
    changeTime = setInterval(timer, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    clearInterval(changeTime);
    startBtn.disabled = false;
})

resetBtn.addEventListener('click', () => {
    clearInterval(changeTime);
    startBtn.disabled = false;
    countSec = 0;
    timer();
});

timer();