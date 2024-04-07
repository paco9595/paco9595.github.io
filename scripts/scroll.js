window.addEventListener("scroll", (e) => {
  if (e.target.scrollingElement.scrollTop < 250) {
    document.querySelector('.scroll').classList.remove('hidden')
  }else {
    document.querySelector('.scroll').classList.add('hidden')
  }
});
