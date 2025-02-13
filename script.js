let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let showSlide = (index) => {
    if (index >= slides.length) {
        // Stop showing slides once the last slide is shown
        return;
    } else if (index < 0) {
        // Stop showing slides if we're on the first slide and click on previous
        return;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

let changeSlide = (direction) => {
    // Calculate the new slide index
    let newSlide = currentSlide + direction;

    // Ensure the new slide index is within bounds
    if (newSlide >= 0 && newSlide < slides.length) {
        showSlide(newSlide);
    }
}

// Initialize the slider
showSlide(currentSlide);

// Add event listener to listen for the wheel event on each slide
slides.forEach((slide) => {
    slide.addEventListener('wheel', (event) => {
        // Check if we're on the last slide and scrolling down
        if (currentSlide === slide.length - 1 && event.deltaY > 0) {
            // Allow default scrolling behavior on the last slide when scrolling down
            return;
        } else if (event.deltaY > 0) {
            // Scroll down, show next slide
            changeSlide(1);
        } else if (event.deltaY < 0) {
            // Scroll up, show previous slide
            changeSlide(-1);
        } else {
            // Prevent default scrolling behavior for all other cases
            event.preventDefault();
        }
    });
});

// Function to update button visibility
let updateButtonVisibility = () => {
    if (currentSlide === 2) {
        prev.style.display = 'none';
        next.style.display = 'none';
    } else {
        prev.style.display = 'block';
        next.style.display = 'block';
    }
}

// Update button visibility on slide change
slides.forEach((slide) => {
    slide.addEventListener('wheel', updateButtonVisibility);
});

// Initial button visibility check
updateButtonVisibility();