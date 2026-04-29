/* ============================================
   Copilot Token Optimization — Script
   ============================================ */

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// Restore saved theme
(function () {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

// Layer expand/collapse (inline accordion)
function toggleLayer(band) {
  const isExpanded = band.classList.contains("layer-expanded");
  if (isExpanded) {
    band.classList.remove("layer-expanded");
    band.setAttribute("aria-expanded", "false");
  } else {
    band.classList.add("layer-expanded");
    band.setAttribute("aria-expanded", "true");
  }
}

// Prevent card clicks from bubbling to the band
document.querySelectorAll(".component-section").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".layer-band, .connector").forEach((el) => {
  scrollObserver.observe(el);
});
