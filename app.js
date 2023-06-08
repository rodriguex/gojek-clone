function setGojekVideo() {
  new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "VJH5FJ5kaJA",
    playerVars: {
      playsinline: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      loop: 1,
    },
    events: {
      onReady: (event) => event.target.playVideo(),
    },
  });
}

function setNavbar(event) {
  let nav = document.getElementsByClassName("navbar")[0];
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
}

function setFirstSlider() {
  setInterval(() => {
    if (whichOne > 0) {
      if (whichOne + 1 <= maxIndex) {
        whichOne++;
      } else {
        whichOne = 0;
      }

      if (whichOne === maxIndex) {
        prev = 0;
      } else {
        prev = whichOne - 1;
      }
      sliders[prev].style.display = "none";
    }

    sliders[whichOne].style.display = "block";

    if (whichOne === 0) {
      whichOne++;
    }
  }, 2000);
}

let initialScroll = 0;
let whichOne = 0;
let prev = 0;
let maxIndex = 3;
let sliders = document.getElementsByClassName("first-slider-img");

window.addEventListener("load", () => {
  setGojekVideo();
  setFirstSlider();

  document.addEventListener("scroll", (event) => {
    setNavbar(event);
  });
});
