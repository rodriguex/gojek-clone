let initialScroll = 0;
let nav = document.getElementsByClassName("navbar")[0];

document.addEventListener("scroll", (event) => {
  let newScroll = event.target.documentElement.scrollTop;
  if (newScroll === 0) {
    nav.classList.remove("navbar-background");
  } else if (initialScroll < newScroll) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.classList.add("navbar-background");
  }
  initialScroll = newScroll;
});
