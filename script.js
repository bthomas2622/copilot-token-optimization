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

// Layer expand/collapse
let overlay = null;

function toggleLayer(band) {
  if (band.classList.contains("layer-focused")) return;
  openLayer(band);
}

function openLayer(band) {
  // Create overlay
  overlay = document.createElement("div");
  overlay.className = "layer-focus-overlay";
  overlay.onclick = () => closeLayer(band);
  document.body.appendChild(overlay);

  // Expand
  band.classList.add("layer-focused");
  band.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";

  // ESC to close
  band._escHandler = (e) => {
    if (e.key === "Escape") closeLayer(band);
  };
  document.addEventListener("keydown", band._escHandler);
}

function closeLayer(band) {
  band.classList.remove("layer-focused");
  band.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";

  if (overlay) {
    overlay.remove();
    overlay = null;
  }

  if (band._escHandler) {
    document.removeEventListener("keydown", band._escHandler);
    delete band._escHandler;
  }
}

// Prevent card clicks from bubbling to the band when focused
document.querySelectorAll(".component-section").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (card.closest(".layer-focused")) {
      e.stopPropagation();
    }
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
