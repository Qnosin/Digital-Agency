// Get elemmets
const loader = document.querySelector("#loader-wrapper");
const mobileMenuOverlay = document.querySelector("#mobile-menu-overlay");
const mobileMenuClose = document.querySelector("#mobile-menu-close");
const mobileMenuTrigger = document.querySelector("#mobile-menu-trigger");

window.addEventListener("load", () => {
  if (loader) {
    loader.remove();
  }
});

if (mobileMenuTrigger) {
  mobileMenuTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("opened", "lock");
  });
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("opened", "lock");
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("opened", "lock");
  });
}
