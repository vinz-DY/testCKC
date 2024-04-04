const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  const offset = -index * slideWidth;
  document.querySelector(".slides").style.transform = `translateX(${offset}px)`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  showSlide(currentSlide);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = Math.min(currentSlide + 1, slides.length - 1);
  showSlide(currentSlide);
});
