const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#6b8fd4', '#856fd7', '#ffa700', '#1d766f', '#a66d00', '#6749d7']
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

// концепт делигирование событий
timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time'));
       screens[1].classList.add('up');
       startGame();
    }
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle() 
    }
})


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    setTime(time);
}

function decreaseTime() {
    if(time === 0) {
        finishGame();
    } else {
    let current = --time;
        if(current < 10) {
            current = `0${current}`
        }
    setTime(current);
    }
}

function setTime(value) {
    if (time === 60) {
        timeEl.innerHTML = `01:00` 
    } else {
      timeEl.innerHTML = `00:${value}`  
    }
}

function finishGame(){
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
    setGameOver();
    mainSong.pause();
}

function setGameOver() {
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.classList.add('reset');
    board.appendChild(resetButton);
    resetButton.addEventListener('click', reload);
}

function reload(){
	window.location.reload();
	
}


function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
        
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    setColor(circle);

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

const mainSong = document.createElement('audio');
const source = document.createElement('source');
source.src = 'http://boobooka.com/wp-content/uploads/2018/03/8-bit-star-wars-imperskij-marsh.mp3?_=14';
source.type = 'audio/mpeg';
board.appendChild(mainSong);
mainSong.appendChild(source);

board.addEventListener('mouseover', playMainSong, false); 
function playMainSong() {
    mainSong.play();
}

board.addEventListener('mouseleave', pausemainSong, false); 
function pausemainSong() {
    mainSong.pause();
}

function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle');

        if(circle){
            circle.click();
    } 
    }
    
    setInterval(kill, 75);
}