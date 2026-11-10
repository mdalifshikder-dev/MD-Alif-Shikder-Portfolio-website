/* =========================================================
   ALIF PORTFOLIO — JAVASCRIPT
   Small interactions for the navigation and scroll effects.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Automatically show the current year in the footer.
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Add a background style to the navbar after scrolling.
  const navbar = document.querySelector(".custom-nav");
  function updateNavbar() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 35);
    }
  }
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // Reveal elements smoothly when they enter the screen.
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    // Fallback for older browsers: show all content.
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }

  // Close the mobile navigation after selecting a menu link.
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navMenu = document.getElementById("mainNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu && navMenu.classList.contains("show") && window.bootstrap) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });
});
