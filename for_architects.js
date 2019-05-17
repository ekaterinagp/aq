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

/*direction aware hover effect
determine the mouse direction
apply css classes depending on direction
 */

// var ourTeam = document.querySelector("#our_team>.wrapper_3_columns");
// ourTeam.addEventListener("mousemove", getDirection => {
//   getDirection();
// });

const getDirection = function(e, item) {
  // Width and height of current item
  let w = item.offsetWidth;
  let h = item.offsetHeight;
  let position = _getPosition(item);

  // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
  let x = e.pageX - position.x - (w / 2) * (w > h ? h / w : 1);
  let y = e.pageY - position.y - (h / 2) * (h > w ? w / h : 1);

  // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).  See https://stackoverflow.com/a/3647634 for a full explanation.
  let d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

  // console.table([x, y, w, h, e.pageX, e.pageY, item.offsetLeft, item.offsetTop, position.x, position.y]);

  return d;
};
