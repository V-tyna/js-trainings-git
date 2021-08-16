const spinner = document.querySelector('.container');
const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime) / 3;

    if (rotateCount > 359) {
        rotateCount %= 360;
    }

    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}

draw();

function stopAnimation() {
    cancelAnimationFrame(rAF);
}

stopBtn.addEventListener('click', stopAnimation);
startBtn.addEventListener('click', draw);