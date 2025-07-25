/*
JS notes for responsive slider:

const = "constant variable", cannot be reassigned
let = "let me change this," reassignable later

appendChild = add child element to the end of another element
insertBefore = insert element before another specified child element

querySelector = select first matching element by CSS selector
clientWidth = current visible width of an element in pixels

cloneNode(true) = deep clone of an element (clone itself and its children)

*/

document.addEventListener("DOMContentLoaded", () => { // run code after HTML loads
    const slides = document.getElementById('slides'); // get slides container
    const slider = document.querySelector('.slider'); // get slider container to measure width

    let index = 1; // current slide index (starts at first real slide, because of clones)
    let isMoving = false; // prevent overlapping animations

    const imgArray = Array.from(slides.children); // get all slide images as an array
    const firstClone = imgArray[0].cloneNode(true); // clone first slide
    const lastClone = imgArray[imgArray.length - 1].cloneNode(true); // clone last slide

    slides.appendChild(firstClone); // add clone of first slide at the end
    slides.insertBefore(lastClone, slides.firstChild); // add clone of last slide at the beginning

    function getSlideWidth() {
        return slider.clientWidth; // get current width of slider container dynamically (for responsiveness)
    }

    // Set initial position: move slides left by one slide width to show first real slide
    slides.style.transform = `translateX(-${getSlideWidth() * index}px)`;

    function moveSlide(toIndex) { // move to slide with given index
        if (isMoving) return; // ignore if animation is ongoing
        isMoving = true; // mark animation as started
        slides.style.transition = 'transform 0.5s ease'; // enable smooth sliding animation
        slides.style.transform = `translateX(-${getSlideWidth() * toIndex}px)`; // move horizontally by slide width * index
        index = toIndex; // update current slide index
    }

    // Attach button click handlers to move slides
    document.getElementById('nextBtn').onclick = () => moveSlide(index + 1); // next slide
    document.getElementById('prevBtn').onclick = () => moveSlide(index - 1); // previous slide

    // When CSS transition ends, check if we need to reset position for infinite loop effect
    slides.addEventListener('transitionend', () => {
        const total = slides.children.length - 2; // total real slides (excluding clones)

        if (index === 0) { // if moved left beyond first real slide (showing clone of last slide)
            slides.style.transition = 'none'; // disable animation
            index = total; // jump instantly to last real slide
            slides.style.transform = `translateX(-${getSlideWidth() * index}px)`; // update position
        }

        if (index === total + 1) { // if moved right beyond last real slide (showing clone of first slide)
            slides.style.transition = 'none';
            index = 1; // jump instantly to first real slide
            slides.style.transform = `translateX(-${getSlideWidth() * index}px)`; // update position
        }

        isMoving = false; // animation finished, allow new moves
    });

    // On window resize, update slide position immediately to keep it centered
    window.addEventListener('resize', () => {
        slides.style.transition = 'none'; // disable animation for immediate reposition
        slides.style.transform = `translateX(-${getSlideWidth() * index}px)`; // reposition
    });
});
