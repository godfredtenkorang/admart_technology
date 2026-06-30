const openSearchButton = document.getElementById("openSearch");
const closeSearchButton = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");

const openMenuButton = document.getElementById("openMenu");
const closeMenuButton = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openSearchButton.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeSearchButton.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

searchOverlay.addEventListener("click", (event) => {
  if (event.target === searchOverlay) {
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

openMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchOverlay.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});