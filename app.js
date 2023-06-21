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
  let navLink = document.getElementsByClassName("nav-link");
  let newScroll = event.target.documentElement.scrollTop;

  if (newScroll === 0) {
    nav.classList.remove("navbar-background");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "black";
    }
  } else if (initialScroll < newScroll) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.classList.add("navbar-background");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "white";
    }
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

  // sliders[prev].style.display = "none";
  // sliders[whichOne].style.display = "block";

  // indicators[prev].style.background = "gray";
  // indicators[whichOne].style.background = "white";

  pausedAutomatic = false;
}

function nextSlide() {
  sliderLogic("next");
}

function prevSlide() {
  sliderLogic("prev");
}

function nextSecondSlider() {
  secondSlider.style.direction = "ltr";
  if (secondSlider.scrollLeft + 1000 >= secondSlider.offsetWidth) {
    if (indexTrack === 3) {
      indexTrack = 0;
    } else {
      indexTrack++;
    }
    let copy = secondSliderSliders[indexTrack].cloneNode(true);
    secondSlider.appendChild(copy);
  }
  secondSlider.scrollLeft += 1000;
}

function prevSecondSlider() {
  secondSlider.style.direction = "rtl";
  if (secondSlider.scrollLeft - 1000 <= 0) {
    if (indexTrack === 0) {
      indexTrack = 3;
    } else {
      indexTrack--;
    }
    let copy = secondSliderSliders[indexTrack].cloneNode(true);
    secondSlider.appendChild(copy);
  }
  secondSlider.scrollLeft -= 1000;
}

let initialScroll = 0;

let sliders = document.getElementsByClassName("first-slider-img");
let indicators = document.getElementsByClassName("bar")[0];

let whichOne = 0;
let prev = 0;
let maxIndex = 3;
let pausedAutomatic = false;

let automaticSlider = setInterval(() => {
  if (!pausedAutomatic) {
    sliderLogic();
    sliders[prev].style.display = "none";
    sliders[whichOne].style.display = "block";

    // indicators[prev].style.background = "gray";
  }
}, 2000);

let aa = 0;
window.addEventListener("load", () => {
  let prev = document.querySelector(".jonson-prev");
  let next = document.querySelector(".jonson-next");
  let slider = document.querySelector(".second-slider");
  let item = document.querySelectorAll(".perks-slider");

  console.log("i was here just passing but i'll go back");

  prev.onclick = () => {
    slider.insertBefore(item[item.length - 1], item[0]);
    item = document.querySelectorAll(".perks-slider");
  };

  next.onclick = () => {
    slider.appendChild(item[0]);
    item = document.querySelectorAll(".perks-slider");
  };

  document.addEventListener("scroll", (event) => {
    setNavbar(event);
  });
});
