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
    if (sectionName == "section_types") {
      item.style.color = "black";
      item.style.fontWeight = "normal";
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
  if (item.id === "resedential") img.setAttribute("src", "img/house.png");
  if (item.id === "business") img.setAttribute("src", "img/building.png");
  if (item.id === "education") img.setAttribute("src", "img/office.png");
  if (item.id === "aestetic") img.setAttribute("src", "img/design.png");
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
  if (item.id == "resedential") {
    document.querySelector("#type_of_firms").textContent = "resedential";
    textDiv.textContent =
      "Resedential bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nihil quaerat! Repudiandae officiis explicabo iusto. Totam, veritatis similique. Placeat at voluptas voluptate pariatur, enim nisi dolor sunt magnam modi eos?";
  }
  if (item.id == "business") {
    document.querySelector("#type_of_firms").textContent = "business";
    textDiv.textContent =
      "business business ojojoj bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nihil quaerat! Repudiandae officiis explicabo iusto. Totam, veritatis similique. Placeat at voluptas voluptate pariatur, enim nisi dolor sunt magnam modi eos?";
  }
  if (item.id == "education") {
    document.querySelector("#type_of_firms").textContent = "educational";
    textDiv.textContent =
      "education is the best, education rules bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nihil quaerat! Repudiandae officiis explicabo iusto. Totam, veritatis similique. Placeat at voluptas voluptate pariatur, enim nisi dolor sunt magnam modi eos?";
  }
  if (item.id == "aestetic") {
    document.querySelector("#type_of_firms").textContent = "design";
    textDiv.textContent =
      "aestetic aestetic,but education rules bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nihil quaerat! Repudiandae officiis explicabo iusto. Totam, veritatis similique. Placeat at voluptas voluptate pariatur, enim nisi dolor sunt magnam modi eos?";
  }
};

const applyFill = (item, section) => {
  if (section == section_platform) {
    item.querySelector("svg").style.fill = "black";
  }
  if (section == section_why) {
    item.querySelector("svg").style.fill = "#ef6461";
  }

  if (section == section_types) {
    item.style.color = "#ef6461";
    item.style.fontWeight = "bold";
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
    shrinkRemoveArrow();
    growAddArrow(item);
  });
});

const section_types = document.querySelector("#section_types");
let section_types_items = section_types.querySelectorAll(".type");
section_types_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_types_items, "section_types");
    changeText(item, section_types);
    changeImage(item, section_types);
    applyFill(item, section_types);
  });
});

function growAddArrow(box) {
  box.classList.add("arrow");
  box.classList.add("grow");
}
function shrinkRemoveArrow() {
  section_why_items.forEach(bubble => {
    bubble.classList.remove("arrow");
    bubble.classList.remove("grow");
  });
}

const formDiv = document.querySelector("#form");
let questionText = formDiv.querySelector("h3");
let options = document.querySelector("#options");
let currentFormItem = 0;

let formItems = [
  {
    id: 1,
    txt: "Select type of project",
    options: function() {
      let values = [
        {
          title: "New construction",
          img: "office.png",
          textAbout:
            "Constructing a new house from scratch. This includes preparation of the construction site, materials and labor"
        },
        {
          title: "Structural modification",
          img: "cabin.jpg",
          textAbout:
            "The building is already complete but needs to be modified, altered or improved. This includes expanding the livable area and lorem ipsum"
        },
        {
          title: "Renovation",
          img: "design.png",
          textAbout:
            "The building is complete and needs to be renovated, repainted or completely restored. "
        },
        {
          title: "Other",
          img: "other.jpg",
          textAbout:
            "The building is complete and needs to be renovated, repainted or completely restored. "
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "projectType");
      form.setAttribute("class", "wrapper_4_columns");
      values.forEach(value => {
        let divForValue = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "projectType");
        theInput.setAttribute("value", value.title);
        let description = document.createElement("p");
        description.textContent = value.textAbout;
        let divWrapper = document.createElement("div");
        divWrapper.setAttribute("class", "btnRadio");
        let nameInput = document.createElement("div");
        nameInput.textContent = value.title;
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + value.img);
        img.setAttribute("class", "imgForm");

        divWrapper.appendChild(img);
        divWrapper.appendChild(nameInput);
        divWrapper.appendChild(description);
        form.appendChild(divForValue);
        label.appendChild(theInput);
        label.appendChild(divWrapper);
        divForValue.appendChild(label);
        divForValue.appendChild(theBreak);
      });
      return form;
    }
  },
  {
    id: 2,
    txt: "Select type of building",
    options: function() {
      let values = [
        {
          title: "Resedential",
          img: "resedential.jpg"
        },
        {
          title: "Cabin",
          img: "cabin.jpg"
        },
        {
          title: "Business",
          img: "business.png"
        },
        {
          title: "Healthcare",
          img: "healthcare.jpg"
        },
        {
          title: "Industrial",
          img: "industrial.jpg"
        },
        {
          title: "Educational",
          img: "educational.jpg"
        },
        {
          title: "Landscape",
          img: "landscape.jpg"
        },
        {
          title: "Other",
          img: "other.jpg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "buildingType");
      form.setAttribute("class", "wrapper_3_columns");
      values.forEach(value => {
        let divForValue = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "buildingType");
        theInput.setAttribute("value", value.title);
        let divWrapper = document.createElement("div");
        divWrapper.setAttribute("class", "btnRadio");
        let nameInput = document.createElement("div");
        nameInput.textContent = value.title;
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + value.img);
        img.setAttribute("class", "imgForm");

        divWrapper.appendChild(img);
        divWrapper.appendChild(nameInput);
        form.appendChild(divForValue);
        label.appendChild(theInput);
        label.appendChild(divWrapper);
        divForValue.appendChild(label);
        divForValue.appendChild(theBreak);
      });
      return form;
    }
  }
];

function insertDOMforForm() {
  options.appendChild(formItems[currentFormItem].options());
}

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

nextButton.addEventListener("click", () => {
  nextElement();
});

prevButton.addEventListener("click", () => {
  prevElement();
});

function nextElement() {
  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";

  let currentItem = nextItem();
  form.querySelector("h3").textContent = currentItem.question;

  options.appendChild(formItems[currentFormItem].options());
}

function prevElement() {
  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";
  let currentItem = prevItem();
  form.querySelector("h3").textContent = currentItem.question;

  options.appendChild(formItems[currentFormItem].options());
}

function nextItem() {
  if (currentFormItem + 1 < formItems.length) {
    currentFormItem++;
  }
  return formItems[currentFormItem];
}

function prevItem() {
  if (currentFormItem - 1 < 0) {
    currentFormItem = 0;
  } else {
    currentFormItem--;
  }
  return formItems[currentFormItem];
}

let viewWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
console.log({ viewWidth });
