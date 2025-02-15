document.addEventListener("DOMContentLoaded", function () {
  // Animasi fade-in saat halaman pertama kali dimuat
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  });

  setTimeout(() => {
      fadeElements.forEach(el => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
      });
  }, 500);

  // Animasi saat scroll (slide-in)
  const slideElements = document.querySelectorAll(".slide-in");
  function handleScroll() {
      slideElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
              el.style.opacity = 1;
              el.style.transform = "translateY(0)";
          }
      });
  }

  slideElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  });

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
