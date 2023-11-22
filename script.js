const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let counter = 0.5;
const size = slides[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(() => {
    if (counter >= slides.length - 1) return;
    slider.style.transition = "transform 0.5s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 3000);
