document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.navToggle);
    if (!target) {
      return;
    }

    const isOpen = target.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
