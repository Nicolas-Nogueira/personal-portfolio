// Simple smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Example dynamic feature: show current year in footer
  document.querySelector("footer p").textContent =
    `© ${new Date().getFullYear()} Nick Nogueira | Hosted on GitHub Pages`;
  
  // Reveal on scroll using IntersectionObserver (toggle on enter/leave)
  (function () {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal');

    if (prefersReduced) {
      targets.forEach(el => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view'); // entering viewport
        } else {
          entry.target.classList.remove('in-view'); // leaving viewport
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '0px 0px -10% 0px'
    });

    targets.forEach(el => observer.observe(el));
  })();