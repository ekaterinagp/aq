"use strict";

function timelineAnimation() {
  let tl = new TimelineMax();
  tl.staggerFromTo(
    ".timelineWrapper",
    0.3,
    {
      scale: 1.2,
      opacity: 0,
      skewY: 15
    },
    { scale: 1, opacity: 1, skewY: 0, ease: Power1.easeInOut },
    0.2
  ).staggerFromTo(
    ".timelineContent",
    0.3,
    {
      opacity: 0
    },
    {
      opacity: 1
    },
    0.1
  );
}
let element = document.querySelector(".timelineWrapper");
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener("scroll", animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
    console.log("true");
  }
  console.log("false");
  return false;
}

// animate element when it is in view

// Set animation running to false
let isInViewAnimationRunning = false;
function animate() {
  // Only go further if no animation is running
  if (!isInViewAnimationRunning) {
    // is element in view?
    let isInView = inView();
    // If element is in view, go ahead and start animation and set animation is running to true, to avoid starting animation over and over
    if (isInView) {
      isInViewAnimationRunning = true;
      timelineAnimation();
    }
  }
}
