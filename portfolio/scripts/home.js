document.addEventListener("DOMContentLoaded", () => {
  // Scroll-reveal for hobby cards
  const cards = document.querySelectorAll(".hobby-card.hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));

  // Mobile tap-to-expand: toggle description visibility
  document.querySelectorAll(".hobby-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });
});
