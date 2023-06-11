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

function sliderLogic(action = "next") {
  pausedAutomatic = true;

  function nextOne() {
    if (whichOne === maxIndex) {
      whichOne = 0;
      prev = maxIndex;
    } else {
      whichOne++;
      prev = whichOne - 1;
    }
  }

  function prevOne() {
    if (whichOne === 0) {
      whichOne = maxIndex;
      prev = 0;
    } else {
      whichOne--;
      prev = whichOne + 1;
    }
  }

  if (action === "next") {
    nextOne();
  } else {
    prevOne();
  }

  sliders[prev].style.display = "none";
  sliders[whichOne].style.display = "block";

  indicators[prev].style.background = "gray";
  indicators[whichOne].style.background = "red";

  pausedAutomatic = false;
}

function nextSlide() {
  sliderLogic("next");
}

function prevSlide() {
  sliderLogic("prev");
}

function nextSecondSlider() {
  secondSlider.scrollLeft += 1000;
  console.log(secondSlider.offsetWidth);
  console.log(secondSlider.scrollLeft + 1000);
}

function prevSecondSlider() {
  if (secondSlider.scrollLeft - 1000 <= 0) {
    secondSliderSliders[1].before(secondSliderSliders[0]);
  }
  secondSlider.scrollLeft -= 1000;
}

let initialScroll = 0;

let sliders = document.getElementsByClassName("first-slider-img");
let indicators = document.getElementsByClassName("span-indicator");

let whichOne = 0;
let prev = 0;
let maxIndex = 3;
let pausedAutomatic = false;

let secondSlider = document.getElementsByClassName("second-slider")[0];
secondSlider.scrollLeft = 350;

let secondSliderSliders = document.getElementsByClassName("slider");
let arrows = document.getElementsByClassName("arrows")[0];

let automaticSlider = setInterval(() => {
  if (!pausedAutomatic) {
    sliderLogic();
  }
}, 2000);

window.addEventListener("load", () => {
  // setGojekVideo();

  sliders[0].style.display = "block";
  indicators[0].style.background = "red";

  document.addEventListener("scroll", (event) => {
    setNavbar(event);
  });

  // secondSlider.addEventListener("mouseenter", () => {
  //   arrows.style.display = "flex";
  // });

  // secondSlider.addEventListener("mouseleave", () => {
  //   arrows.style.display = "none";
  // });
});
