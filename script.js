const clearAllItemsStyle = (items, sectionName) => {
  items.forEach(item => {
    if (sectionName === "section_whatyouget") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
    if (sectionName === "section_platform" || sectionName === "section_why") {
      item.querySelector("svg").style.fill = "rgb(207, 205, 205)";
    }
  });
};

const applyStyle = item => {
  item.querySelector("h3").style.color = "#EF6461";
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
    clearAllItemsStyle(section_whatyouget_items, "section_whatyouget");
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

const changeText = (item, section) => {
  let textDiv = section.querySelector("p");
  let title = section.querySelector("h2");

  if (item.id === "section_platform_item_1")
    textDiv.textContent =
      "Beautiful text about overview overviewnostrum repellat harum iste magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim.";
  if (item.id == "section_platform_item_2")
    textDiv.textContent =
      "Matching matching matching repellat harum iste magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  if (item.id == "section_platform_item_3")
    textDiv.textContent =
      "Communication is the best in the world repellat harum iste magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  if (item.id == "section_platform_item_4")
    textDiv.textContent =
      "Deal flow flows the best repellat harum iste magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  if (item.id == "section_why_item_1") {
    title.textContent = "Save time";
    textDiv.textContent =
      "Save all your time in the world!  harum iste magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  }

  if (item.id == "section_why_item_2") {
    title.textContent = "Hassle free";
    textDiv.textContent =
      "Never hassle again! harum iste magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  }

  if (item.id == "section_why_item_3") {
    title.textContent = "Better process";
    textDiv.textContent =
      "Soooo better process!! magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  }

  if (item.id == "section_why_item_4") {
    title.textContent = "No obligation";
    textDiv.textContent =
      "Absolutely ni obligation!! magni numquam, quisquam non soluta enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere sunt laborum magnam quia! Vel ipsum, nobis eveniet quod animi eum nostrum repellat harum iste magni numquam, quisquam non soluta enim";
  }
};

const applyFill = (item, section) => {
  if (section == section_platform) {
    item.querySelector("svg").style.fill = "black";
  }
  if (section == section_why) {
    item.querySelector("svg").style.fill = "#ef6461";
  }
};

const section_platform = document.querySelector("#section_platform");
let section_platform_items = section_platform.querySelectorAll(".icon");
section_platform_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_platform_items, "section_platform");
    applyFill(item, section_platform);
    changeText(item, section_platform);
  });
});

const section_why = document.querySelector("#section_why");
let section_why_items = section_why.querySelectorAll(".items");
section_why_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_why_items, "section_why");
    applyFill(item, section_why);
    changeText(item, section_why);
  });
});
