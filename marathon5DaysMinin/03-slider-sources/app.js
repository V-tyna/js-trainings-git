const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('.background-image').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1;
            }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

let tooltipElem;

document.onmouseover = function(event) {

    let target = event.target;   
 
    let tooltipHtml = target.dataset.tooltip;

    if(!tooltipHtml) {
        return;
     } else {

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coordinates = target.getBoundingClientRect();
    let left = coordinates.left - 7;
    if (left <0) left = 0;

    let top = coordinates.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coordinates.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
}};

document.onmouseout = function(e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};