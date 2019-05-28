window.addEventListener("load", init)

let speechBubbles = document.querySelectorAll(".items");
const architect_section = document.querySelector("#arch_projects");
speechBubbles.forEach(bubble => {
  bubble.addEventListener("click", () => {
    // console.log(bubble);
    clearAllItemsStyle(speechBubbles);
    applyFill(bubble);
    changeText(bubble, arch_projects);
    shrinkRemoveArrow();
    growAddArrow(bubble);
  });
});

const applyFill = item => {
  item.querySelector("svg").style.fill = "#ef6461";
};
const changeText = (item, section) => {
  let textDiv = section.querySelector("p");
  let title = section.querySelector("h2");
  textDiv.classList.add("textAnimation");
  title.classList.add("textAnimation");
  if (item.id == "organic") {
    title.textContent = "Organically generated local projects";
    textDiv.textContent =
      "We validate organic leads that sign up through our site and deliver them instantly";
  }

  if (item.id == "freelance") {
    title.textContent = "Freelance opportunities: small and large projects";
    textDiv.textContent =
      "We aggrigate opportunities from around the globe. Connect. Bid. Win.";
  }
  if (item.id == "tender") {
    title.textContent = "Government tenders and RFPs from all over Europe";
    textDiv.textContent =
      "Build a proposal on the platform. Export. Win a project.";
  }
  textDiv.addEventListener("animationend", ()=>{
    console.log("removed");
    removeAnimationClass(textDiv, "textAnimation");
  });
  title.addEventListener("animationend", ()=>{
    console.log("removed");
    removeAnimationClass(title, "textAnimation");
  });
};
const removeAnimationClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

function growAddArrow(box) {
  box.classList.add("arrow");
  box.classList.add("grow");
}
function shrinkRemoveArrow() {
  speechBubbles.forEach(bubble => {
    bubble.classList.remove("arrow");
    bubble.classList.remove("grow");
  });
}
const clearAllItemsStyle = items => {
  items.forEach(item => {
    item.querySelector("svg").style.fill = "rgb(207, 205, 205)";
  });
};

function timelineAnimation() {
  // let tl = new TimelineMax();
  TweenMax.staggerFromTo(".hover_wrapper", .3,
   { 
    scale:1.1,
    opacity:0
  },
  {
    scale:1,
    opacity:1
  }, 
  .02);
  // .staggerFromTo(
  //   ".hover_wrapper>img",
  //   .5,{
  //    opacity:0
  //   },
  //   {
  //     opacity:1
  //   }, 0.2);
}

timelineAnimation();

function startSvgAnimation() {
  let title = document.querySelector(".hero_text>h1");
  let subTitle = document.querySelector(".hero_text>p")
 title.classList.add("textAnimation");
  subTitle.classList.add("textAnimation");
  let svg = document.querySelector(".drawSvg");
  let drawFirst = document.querySelector("#first").children;
  let n = 0;
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

function init(){
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  // startHeroAnimation();
  startSvgAnimation();
}