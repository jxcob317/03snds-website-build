(() => {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 48);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const carousels = document.querySelectorAll("[data-carousel]");
  carousels.forEach((carousel) => {
    const viewport = carousel.querySelector(".carousel__viewport");
    const track = carousel.querySelector(".carousel__track");
    const prev = carousel.querySelector(".carousel__btn--prev");
    const next = carousel.querySelector(".carousel__btn--next");
    if (!viewport || !track || !prev || !next) return;

    const step = () => {
      const firstCard = track.firstElementChild;
      if (!firstCard) return viewport.clientWidth * 0.8;
      const style = window.getComputedStyle(track);
      const gap = Number.parseFloat(style.gap) || 0;
      return firstCard.getBoundingClientRect().width + gap;
    };

    prev.addEventListener("click", () => {
      viewport.scrollBy({ left: -step(), behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      viewport.scrollBy({ left: step(), behavior: "smooth" });
    });
  });
})();
