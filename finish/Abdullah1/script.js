  const container = document.getElementById("services-container");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  function updateCardsStyle() {
    const cards = container.querySelectorAll(".services-card");

    cards.forEach(card => card.classList.remove("active"));

    if (cards.length >= 3) {
      cards[1].classList.add("active"); // العنصر بالوسط
    }
  }

  rightArrow.addEventListener("click", () => {
    const lastCard = container.lastElementChild;
    container.insertBefore(lastCard, container.firstElementChild);
    updateCardsStyle();
  });

  leftArrow.addEventListener("click", () => {
    const firstCard = container.firstElementChild;
    container.appendChild(firstCard);
    updateCardsStyle();
  });

  // التهيئة عند التحميل
  updateCardsStyle();