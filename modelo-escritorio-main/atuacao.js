document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-atuacao");
  const modal = document.getElementById("modalAtuacao");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.querySelector(".modal-close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const area = card.dataset.area;
      const htmlContent = card.dataset.html;

      modalTitle.textContent = area;
      modalBody.innerHTML = htmlContent;
      modal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
