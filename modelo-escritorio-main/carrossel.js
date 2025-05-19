document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-multi");
  const slides = carousel.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  const visibleSlides = 3; // Quantos slides aparecem por vez
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth + 20; // largura + margem (10px de cada lado)

  // Função para rolar até o slide atual
  function scrollToSlide(index) {
    const scrollPosition = index * slideWidth;
    carousel.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }

  // Função de navegação manual
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % (totalSlides - visibleSlides + 1);
    scrollToSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + (totalSlides - visibleSlides + 1)) % (totalSlides - visibleSlides + 1);
    scrollToSlide(currentIndex);
  }

  // Evento dos botões
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  // Carrossel automático
  setInterval(showNextSlide, 5000); // troca a cada 5 segundos
});
