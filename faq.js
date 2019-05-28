let endpoint = "https://architecturequote.com/wp-json/wp/v2/faq";

window.addEventListener("load", function() {
  init();
});

function fetchFaq() {
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(function(data) {
        resolve(data);
      });
  });
}

function showFaq(faqData) {
  let templateFaq = document.querySelector(".faqTemplate").content;
  let allFaq = document.querySelector("section");

  // clone.querySelector(".question").textContent = faqData[0].title.rendered;
  // clone.querySelector(".answer").innerHTML = faqData[0].content.rendered;
  for (let i = 0; i < faqData.length; i++) {
    let clone = templateFaq.cloneNode(true);
    clone.querySelector(".question").textContent = faqData[i].title.rendered;
    clone.querySelector(".answer").innerHTML = faqData[i].content.rendered;
    allFaq.appendChild(clone);
  }
}

function showFaq(faqData) {
  let templateFaq = document.querySelector(".faqTemplate").content;
  let allFaq = document.querySelector("section");

  // clone.querySelector(".question").textContent = faqData[0].title.rendered;
  // clone.querySelector(".answer").innerHTML = faqData[0].content.rendered;
  for (let i = 0; i < faqData.length; i++) {
    let clone = templateFaq.cloneNode(true);
    clone.querySelector(".question").textContent = faqData[i].title.rendered;
    clone.querySelector(".answer").innerHTML = faqData[i].content.rendered;
    allFaq.appendChild(clone);
  }
}

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

// timelineAnimation();

// get the element to animate
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
  }

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
function startSvgAnimation() {
  let title = document.querySelector(".hero_text>h1");
  let subTitle = document.querySelector(".hero_text>p")
 title.classList.add("textAnimation");
  subTitle.classList.add("textAnimation");
  let svg = document.querySelector(".drawSvg");
  let drawFirst = document.querySelector("#first").children;
  // let n = 0;
  svg.style.visibilty = "initial;";

  console.log(drawFirst);
  for (let i = 0; i < drawFirst.length; i++) {
    drawFirst[i].classList.add("draw");
    // drawFirst[i].style.animationDelay = (n += 0.03) + "s";
    // console.log(n);
  }
  greenSockFade();
}

function greenSockFade() {
  let figure = document.querySelector(".heroImg");
  TweenMax.fromTo(
    figure,
    1,
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: Power3.easeIn
    },
    5
  );

  let laptop = document.querySelector(".hero_laptop");
  TweenMax.from(
    laptop,
    1,
    {
      opacity: 0,
      ease: Power3.easeIn
    },
    10
  );
}


async function init() {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  startSvgAnimation(); 
  const faqData = await fetchFaq();
  // console.log(faqData);
  showFaq(faqData);
  let plusses = document.querySelectorAll(".plus");
  let open = false;
  plusses.forEach(plus => {
    plus.addEventListener("click", function() {
      console.log(open);
      if (open === false) {
        plus.parentElement.style.height = "40vh";
        plus.style.transform = "rotate(180deg)";

        open = true;
      } else {
        plus.parentElement.style.height = "4em";
        plus.style.transform = "rotate(0)";
        open = false;
      }
    });
  });
}
