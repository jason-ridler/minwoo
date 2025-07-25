
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.getElementById('slides');
    const slider = document.querySelector('.slider');
    const imgArray = Array.from(slides.children);

    const firstClone = imgArray[0].cloneNode(true);
    const lastClone = imgArray[imgArray.length - 1].cloneNode(true);

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slides.firstChild);

    let index = 1;
    let isMoving = false;

    function getSlideWidth() {
        return slider.clientWidth;
    }

    slides.style.transform = `translateX(-${getSlideWidth() * index}px)`;

    function moveSlide(toIndex) {
        if (isMoving) return;
        isMoving = true;
        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(-${getSlideWidth() * toIndex}px)`;
        index = toIndex;
    }

    document.getElementById('nextBtn').onclick = () => moveSlide(index + 1);
    document.getElementById('prevBtn').onclick = () => moveSlide(index - 1);

    slides.addEventListener('transitionend', () => {
        const total = slides.children.length - 2;

        if (index === 0) {
            slides.style.transition = 'none';
            index = total;
            slides.style.transform = `translateX(-${getSlideWidth() * index}px)`;
        }

        if (index === total + 1) {
            slides.style.transition = 'none';
            index = 1;
            slides.style.transform = `translateX(-${getSlideWidth() * index}px)`;
        }

        isMoving = false;

    });

    window.addEventListener('resize', () => {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${getSlideWidth() * index}px)`;
    });
});