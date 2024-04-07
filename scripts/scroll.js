window.addEventListener("scroll", (e) => {
    console.log(e)
  if (e.target.scrollingElement.scrollTop === 0) {
    document.querySelector('.scroll').classList.remove('hidden')
  }else {
    document.querySelector('.scroll').classList.add('hidden')
  }
});
