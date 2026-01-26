let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function moveSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(moveSlide, 3000); // 3 seconds
