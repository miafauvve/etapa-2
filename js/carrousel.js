
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.arrow.left').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slideCount - 1;
    updateSlide();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    index = (index < slideCount - 1) ? index + 1 : 0;
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}