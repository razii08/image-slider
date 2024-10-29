const slides = document.querySelectorAll(".slides img"); 
let slideIndex = 0; 
let intervalId = null;

// Initialize slider when content is loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); 
        intervalId = setInterval(nextSlide, 5000); 
    }
}

// Function to show a specific slide based on index
function showSlide(index) {
    if (index >= slides.length) { 
        slideIndex = 0; 
    } else if (index < 0) { 
        slideIndex = slides.length - 1; 
    }

    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slides[slideIndex].classList.add("displaySlide");
}

// Function to move to the next slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
