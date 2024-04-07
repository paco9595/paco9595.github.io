window.addEventListener("scroll", (e) => {
  if (e.target.scrollingElement.scrollTop < 250) {
    document.querySelector(".toTop").classList.add("hidden");
    document.querySelector(".scroll").classList.remove("hidden");
  } else {
    document.querySelector(".toTop").classList.remove("hidden");
    document.querySelector(".scroll").classList.add("hidden");
  }
});

window.addEventListener("load", () => {
  document.querySelector(".toTop").addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
