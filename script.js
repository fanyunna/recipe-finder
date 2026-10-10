const mealsContainer = document.querySelector(".meals-container");

function spawnPaw(x, y) {
  const paw = document.createElement("span");
  paw.className = "click-paw";
  paw.textContent = "🐾";
  paw.style.left = `${x}px`;
  paw.style.top = `${y}px`;
  document.body.appendChild(paw);
  paw.addEventListener("animationend", () => paw.remove());
}

document.addEventListener("click", (e) => {
  spawnPaw(e.clientX, e.clientY);
});

mealsContainer.addEventListener("click", (e) => {
  const mealEl = e.target.closest(".meal");
  if (!mealEl) return;

  const url = mealEl.getAttribute("data-url");
  if (url) {
    window.open(url, "_blank");
  }
});
