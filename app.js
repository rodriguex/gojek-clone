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

function sliderLogic(action) {
  let equal = false;
  function nextOne() {
    if (whichOne === maxIndex) {
      whichOne = 0;
      equal = true;
    } else {
      whichOne++;
      equal = false;
    }
  }

  function prevOne() {
    if (whichOne === 0) {
      whichOne = maxIndex;
      equal = true;
    } else {
      whichOne--;
      equal = false;
    }
  }

  if (action === "next") {
    nextOne();
  } else {
    prevOne();
  }

  let prev = whichOne - 1;
  if (equal) {
    prev = maxIndex;
  } else if (prev === -1) {
    return;
  }

  console.log(whichOne, prev);

  if (prev !== -1) {
    sliders[prev].style.display = "none";
    indicators[prev].style.background = "gray";
  }

  sliders[whichOne].style.display = "block";
  indicators[whichOne].style.background = "red";
}

function nextSlide() {
  sliderLogic("next");
}

function prevSlide() {
  sliderLogic("prev");
}

let initialScroll = 0;
let sliders = document.getElementsByClassName("first-slider-img");
let indicators = document.getElementsByClassName("span-indicator");
let whichOne = 0;
let prev = 0;
let maxIndex = 3;

window.addEventListener("load", () => {
  // setGojekVideo();
  sliders[0].style.display = "block";
  indicators[0].style.background = "red";

  document.addEventListener("scroll", (event) => {
    setNavbar(event);
  });
});
