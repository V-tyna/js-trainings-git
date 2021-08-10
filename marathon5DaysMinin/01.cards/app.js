const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}


let tooltipElem;

document.onmouseover = function(event) {

    let target = event.target;   
 
    let tooltipHtml = target.dataset.tooltip;

    if(!tooltipHtml) {
        return;
    } else if(!target.parentElement.className.includes('active')) {

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
