let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;
const slideTime = 6000; // same speed for ALL slides

function moveSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// First image stays longer
setTimeout(() => {
  moveSlide(); // first move
  setInterval(moveSlide, slideTime); // same speed after that
}, slideTime);
