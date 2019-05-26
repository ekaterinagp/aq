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
  TweenMax.staggerFromTo(".hover_wrapper", 1,
   { 
    scale:1.1,
    opacity:0
  },
  {scale:1,
    opacity:1,
    ease:Power3.easeIn, 
    force3D:true
  }, 
  .2);
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
