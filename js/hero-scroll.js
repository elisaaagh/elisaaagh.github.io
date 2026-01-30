const hero = document.getElementById("hero");
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const maxScroll = 400;
  const progress = Math.min(scrollY / maxScroll, 1);

  // Cambiar altura hero
  const minHeight = 70;
  const maxHeight = 80;

  const newHeight = maxHeight - (maxHeight - minHeight) * progress;
  hero.style.height = newHeight + "vh";

  // Escalar fondo
  const bgScale = 1.2 - progress * 0.2;
  hero.style.setProperty("--bg-scale", bgScale);

  // Escalar texto
  const textScale = 1.1 - progress * 0.1;
  hero.style.setProperty("--text-scale", textScale);
});

history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener("load", function() {
  window.scrollTo(0, 0);
});
