// Carrossel lateral
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-multi");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const cardWidth = carousel.querySelector(".slide").offsetWidth + 20;

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -cardWidth * 1, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: cardWidth * 1, behavior: "smooth" });
  });



  // Acordeão: FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((faq) =>
        faq.classList.remove("active")
      );

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
