const clearAllItemsStyle = (items, sectionName) => {
  items.forEach(item => {
    if (sectionName === "section_whatyouget") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
  });
};

const applyStyle = item => {
  item.querySelector("h3").style.color = "orange";
  item.querySelector("p").style.color = "black";
  resizeText(2, item.querySelector("h3"));
};

const changeImage = (item, section) => {
  let img = section.querySelector("img");
  console.log({ "item.id": item.id });

  if (item.id === "section_whatyouget_item_1")
    img.setAttribute("src", "img/laptop.png");
  if (item.id === "section_whatyouget_item_2")
    img.setAttribute("src", "img/platform.png");
  if (item.id === "section_whatyouget_item_3")
    img.setAttribute("src", "img/house.png");
};

const section_whatyouget = document.querySelector("#section_whatyouget");
let section_whatyouget_items = section_whatyouget.querySelectorAll(".item");
section_whatyouget_items.forEach(item => {
  item.addEventListener("click", () => {
    clearAllItemsStyle(items, "section_whatyouget");
    console.log({ item });
    applyStyle(item);
    changeImage(item, section_whatyouget);
  });
});

function resizeText(multiplier, p) {
  if (p.style.fontSize == "") {
    p.style.fontSize = "1.0em";
  }
  p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
}
