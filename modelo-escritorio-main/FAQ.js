// faq.js
document.addEventListener("DOMContentLoaded", function () {
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
  