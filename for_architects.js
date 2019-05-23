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


