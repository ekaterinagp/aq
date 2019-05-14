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
// let arch_projects = document.querySelector("#arch_projects");
// let section_arch = arch_projects.querySelectorAll(".items");
// section_arch.forEach(item=>{
//   item.addEventListener("click", () => {
//     console.log("item", item);
//   })
// })

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

const section_types = document.querySelector("#types");
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

// function createDivForForm() {
//   let divForForm = document.createElement("div");
//   divForForm.setAttribute("id", "form");
//   divForForm.classList.add("hidden");
//   let h1 = document.createElement("h1");
//   h1.textContent = "ArquitectureQuote";
//   let h3 = document.createElement("h3");
//   h3.textContent = "Select the type of project";
//   let divForOptions = document.createElement("div");
//   divForOptions.setAttribute("id", "options");
//   let divForBtns = document.createElement("div");
//   divForBtns.setAttribute("id", "buttonsForm");
//   let btnPrev = document.createElement("button");
//   btnPrev.setAttribute("id", "prev");
//   let btnNext = document.createElement("button");
//   btnNext.setAttribute("id", "next");
//   divForBtns.appendChild(btnPrev);
//   divForBtns.appendChild(btnNext);
//   divForForm.appendChild(h1);
//   divForForm.appendChild(h3);
//   divForForm.appendChild(divForOptions);
//   divForForm.appendChild(divForBtns);
//   return divForForm;
// }

const formDiv = document.querySelector("#form");

let questionText = formDiv.querySelector("h3");
let options = formDiv.querySelector("#options");
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
  },
  {
    id: 3,
    txt: "Project details",
    options: function() {
      let form = document.createElement("form");
      form.setAttribute("id", "projectDetails");
      let divForSelect = document.createElement("div");
      // divForDropdown_1.setAttribute("class", "dropdown");
      let pForComplex = document.createElement("p");
      pForComplex.textContent = "Choose complexity of the project:";
      let selectComplexity = document.createElement("select");
      let option1 = document.createElement("option");
      option1.setAttribute("value", "Standard");
      option1.innerHTML = "Standard";
      let option2 = document.createElement("option");
      option2.setAttribute("value", "Light");
      option2.innerHTML = "Light Complexity";
      let option3 = document.createElement("option");
      option3.setAttribute("value", "High");
      option3.innerHTML = "High Complexity";
      selectComplexity.append(option1, option2, option3);
      divForSelect.append(pForComplex, selectComplexity);
      // let divContent_1 = document.createElement("div");
      // divContent_1.setAttribute("class", "dropdown-content");
      // let p1 = document.createElement("p");
      // p1.textContent = "Standard";
      // let p2 = document.createElement("p");
      // p2.textContent = "Light Complexity";
      // let p3 = document.createElement("p");
      // p3.textContent = "High Complexity";
      // divContent_1.append(p1, p2, p3);
      // divForDropdown_1.append(span_1, divContent_1);

      let divForInput = document.createElement("div");
      let pForInput = document.createElement("p");
      pForInput.textContent = "Size of project:";
      let inputForSize = document.createElement("input");
      inputForSize.setAttribute("type", "number");
      inputForSize.setAttribute("name", "sizeProject");
      inputForSize.placeholder = "Square meters";
      divForInput.append(pForInput, inputForSize);
      let divForCheckBox = document.createElement("div");
      let descPForCheckBox = document.createElement("p");
      descPForCheckBox.textContent = "Select the relevant architectural tasks:";
      let checkbox_1 = document.createElement("input");
      checkbox_1.setAttribute("type", "checkbox");
      checkbox_1.setAttribute("value", "concept");
      checkbox_1.setAttribute("name", "design1");
      let pForCheck_1 = document.createElement("p");
      pForCheck_1.setAttribute("class", "inline");
      pForCheck_1.textContent = "Concept design";
      let br_1 = document.createElement("br");
      let checkbox_2 = document.createElement("input");
      checkbox_2.setAttribute("type", "checkbox");
      checkbox_2.setAttribute("value", "schematic");
      checkbox_2.setAttribute("name", "design2");
      let pForCheck_2 = document.createElement("p");
      pForCheck_2.setAttribute("class", "inline");
      pForCheck_2.textContent = "Schematic design";
      let br_2 = document.createElement("br");
      let checkbox_3 = document.createElement("input");
      checkbox_3.setAttribute("type", "checkbox");
      checkbox_3.setAttribute("value", "detailed");
      checkbox_3.setAttribute("name", "design3");
      let pForCheck_3 = document.createElement("p");
      pForCheck_3.setAttribute("class", "inline");
      pForCheck_3.textContent = "Detailed design";
      let br_3 = document.createElement("br");
      let checkbox_4 = document.createElement("input");
      checkbox_4.setAttribute("type", "checkbox");
      checkbox_4.setAttribute("value", "tender");
      checkbox_4.setAttribute("name", "design4");
      let pForCheck_4 = document.createElement("p");
      pForCheck_4.setAttribute("class", "inline");
      pForCheck_4.textContent = "Tender";
      let br_4 = document.createElement("br");
      let checkbox_5 = document.createElement("input");
      checkbox_5.setAttribute("type", "checkbox");
      checkbox_5.setAttribute("value", "support");
      checkbox_5.setAttribute("name", "design4");
      let pForCheck_5 = document.createElement("p");
      pForCheck_5.setAttribute("class", "inline");
      pForCheck_5.textContent = "Construction to Build Support";
      let br_5 = document.createElement("br");
      let checkbox_6 = document.createElement("input");
      checkbox_6.setAttribute("type", "checkbox");
      checkbox_6.setAttribute("value", "all");
      checkbox_6.setAttribute("name", "design5");
      let pForCheck_6 = document.createElement("p");
      pForCheck_6.setAttribute("class", "inline");
      pForCheck_6.textContent = "All standard RIBA phases";
      let br_6 = document.createElement("br");
      divForCheckBox.append(
        descPForCheckBox,
        checkbox_1,
        pForCheck_1,
        br_1,
        checkbox_2,
        pForCheck_2,
        br_2,
        checkbox_3,
        pForCheck_3,
        br_3,
        checkbox_4,
        pForCheck_4,
        br_4,
        checkbox_5,
        pForCheck_5,
        br_5,
        checkbox_6,
        pForCheck_6,
        br_6
      );
      let divForSelect_2 = document.createElement("div");
      let pForSelect_2 = document.createElement("p");
      pForSelect_2.textContent = "How high?";
      let selectFloor = document.createElement("select");
      // let span_2 = document.createElement("span");

      let option_2_1 = document.createElement("option");
      option_2_1.setAttribute("value", "Ground floor only");
      option_2_1.textContent = "Ground floor only";
      let option_2_2 = document.createElement("option");
      option_2_2.setAttribute("value", "1 floor");
      option_2_2.textContent = "1 floor";
      let option_2_3 = document.createElement("option");
      option_2_3.setAttribute("value", "2 floor");
      option_2_3.textContent = "2 floor";

      let option_2_4 = document.createElement("option");
      option_2_4.setAttribute("value", "3 floor");
      option_2_4.textContent = "3 floor";

      let option_2_5 = document.createElement("option");
      option_2_5.setAttribute("value", "More");
      option_2_5.textContent = "More";
      selectFloor.append(
        option_2_1,
        option_2_2,
        option_2_3,
        option_2_4,
        option_2_5
      );
      divForSelect_2.append(pForSelect_2, selectFloor);
      // let divContent_2 = document.createElement("div");
      // divContent_2.setAttribute("class", "dropdown-content");
      // let p_2_1 = document.createElement("p");
      // p_2_1.textContent = "Ground floor only";
      // let p_2_2 = document.createElement("p");
      // p_2_2.textContent = "1 floor";
      // let p_2_3 = document.createElement("p");
      // p_2_3.textContent = "2 floor";
      // let p_2_4 = document.createElement("p");
      // p_2_4.textContent = "3 floor";
      // let p_2_5 = document.createElement("p");
      // p_2_5.textContent = "More";
      // divContent_2.append(p_2_1, p_2_2, p_2_3, p_2_4, p_2_5);
      // divForDropdown_2.append(span_2, divContent_2);
      let divForToggle = document.createElement("div");

      let labelForToggel = document.createElement("label");
      let pForDivToggle = document.createElement("p");
      pForDivToggle.textContent = "Basement:";
      labelForToggel.setAttribute("class", "switch");
      let pForToggle_1 = document.createElement("p");
      pForToggle_1.textContent = "Yes";
      let inputForToggle = document.createElement("input");
      inputForToggle.setAttribute("type", "checkbox");
      let spanForToggle = document.createElement("span");
      spanForToggle.setAttribute("class", "slider round");
      // spanForToggle.setAttribute("class", "round");
      labelForToggel.append(inputForToggle, spanForToggle);
      divForToggle.append(pForDivToggle, labelForToggel);

      form.appendChild(divForSelect);
      form.appendChild(divForInput);
      form.appendChild(divForCheckBox);
      form.appendChild(divForSelect_2);
      form.appendChild(divForToggle);
      return form;
    }
  },
  {
    id: 4,
    txt: "Contact information",
    options: function() {
      let form = document.createElement("form");
      form.setAttribute("id", "contactForm");
      form.setAttribute("class", "wrapper_5_rows");
      let divWrap_1 = document.createElement("div");
      let labelFname = document.createElement("label");
      labelFname.setAttribute("for", "fName");
      labelFname.innerHTML = "First name";
      let inputFname = document.createElement("input");
      inputFname.setAttribute("type", "text");
      inputFname.setAttribute("name", "first name");
      inputFname.placeholder = "First name";
      divWrap_1.append(labelFname, inputFname);
      let labelLname = document.createElement("label");
      labelLname.setAttribute("for", "lName");
      labelLname.innerHTML = "Last name";
      let inputLname = document.createElement("input");
      inputLname.setAttribute("type", "text");
      inputLname.setAttribute("name", "last name");
      inputLname.placeholder = "Last name";
      let divWrap_2 = document.createElement("div");
      divWrap_2.append(labelLname, inputLname);
      let labelPhone = document.createElement("label");
      labelPhone.setAttribute("for", "phone");
      labelPhone.innerHTML = "Phone number";
      let inputPhone = document.createElement("input");
      inputPhone.setAttribute("type", "tel");
      inputPhone.setAttribute("name", "phone");
      inputPhone.placeholder = "Phone number";
      let divWrap_3 = document.createElement("div");
      divWrap_3.append(labelPhone, inputPhone);
      let labelemail = document.createElement("label");
      labelemail.setAttribute("for", "email");
      labelemail.innerHTML = "Email";
      let inputEmail = document.createElement("input");
      inputEmail.setAttribute("type", "email");
      inputEmail.setAttribute("name", "email");
      inputEmail.placeholder = "Email";
      let divWrap_4 = document.createElement("div");
      divWrap_4.append(labelemail, inputEmail);

      let whatsupCheckbox = document.createElement("input");
      whatsupCheckbox.setAttribute("type", "checkbox");
      whatsupCheckbox.setAttribute("value", "whatsUp");
      whatsupCheckbox.setAttribute("name", "whatsUp");

      let pForWhatsUp = document.createElement("p");
      pForWhatsUp.setAttribute("class", "inline");
      pForWhatsUp.textContent = "I agree to be contected by WhatsApp";
      let divForWhats = document.createElement("div");
      divForWhats.append(whatsupCheckbox, pForWhatsUp);

      let agreeCheckbox = document.createElement("input");
      agreeCheckbox.setAttribute("type", "checkbox");
      agreeCheckbox.setAttribute("value", "gdpr");
      agreeCheckbox.setAttribute("name", "gdpr");
      let pForGdpr = document.createElement("p");
      pForGdpr.setAttribute("class", "inline");
      pForGdpr.innerHTML =
        'I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a> of ArchitectureQuote IVS"';
      let divForAgree = document.createElement("div");
      divForAgree.append(agreeCheckbox, pForGdpr);

      let newsCheckbox = document.createElement("input");
      newsCheckbox.setAttribute("type", "checkbox");
      newsCheckbox.setAttribute("value", "news");
      newsCheckbox.setAttribute("name", "news");
      let pForNews = document.createElement("p");
      pForNews.setAttribute("class", "inline");
      pForNews.innerHTML =
        "I would like to receive relevant marketing materials and emails from ArchitectureQuote IVS";
      let divForNews = document.createElement("div");
      divForNews.append(newsCheckbox, pForNews);
      form.append(
        divWrap_1,
        divWrap_2,
        divWrap_3,
        divWrap_4,
        divForWhats,
        divForAgree,
        divForNews
      );
      return form;
    }
  }
];

function insertDOMforForm() {
  options.appendChild(formItems[currentFormItem].options());
  questionText.textContent = formItems[currentFormItem].txt;
}

const prevButton = formDiv.querySelector("#prev");
const nextButton = formDiv.querySelector("#next");

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
  questionText.textContent = currentItem.txt;

  options.appendChild(formItems[currentFormItem].options());
}

function prevElement() {
  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";
  let currentItem = prevItem();
  form.querySelector("h3").textContent = currentItem.txt;

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

let startProjectBtns = document.querySelectorAll(".freeEst");
startProjectBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log({ btn });
    formDiv.classList.remove("hidden");
    // document.querySelector("body").appendChild(formDiv);
    insertDOMforForm();
  });
});

let viewWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
console.log({ viewWidth });
