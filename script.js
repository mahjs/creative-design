document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling?.classList.toggle("change");
  });
});

const scrollBtn = document.querySelector(".scroll-up-btn");
let showScrollBtn = false;
document.addEventListener("scroll", () => {
  if (!showScrollBtn && window.scrollY > 150) {
    scrollBtn?.classList.add("show");
    scrollBtn?.classList.remove("hide");
    showScrollBtn = true;
  } else if (showScrollBtn && window.scrollY <= 150) {
    scrollBtn?.classList.remove("show");
    scrollBtn?.classList.add("hide");
    showScrollBtn = false;
  }
});
