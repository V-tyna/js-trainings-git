const board = document.querySelector('#board');
const colors = ['#cfb1ff', '#afe307', '#e9f487', '#c261b8', '#caad64', '#f5d15a']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    
    square.addEventListener('mouseleave', () => removeColor(square));

    square.addEventListener('mouseover',function setRandomSound() {
        const randomSound = getRandomSound();
        randomSound.play();
    }, false);

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

let rainSound = document.createElement('audio');
const source = document.createElement('source');
source.src = 'https://sound-effects-media.bbcrewind.co.uk/mp3/NHU05047154.mp3';
source.type = 'audio/mpeg';
board.appendChild(rainSound);
rainSound.appendChild(source);


board.addEventListener('mouseover', 
function playRainSound() {
    rainSound.play();
}, false); 
board.addEventListener('mouseleave', function pauseRainSound() {
    rainSound.pause();
}, false); 


const sounds = document.querySelectorAll('.bell');

function getRandomSound() {
    const i = Math.floor(Math.random() * sounds.length);
    return sounds[i];
}