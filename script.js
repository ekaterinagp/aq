"use strict";

window.addEventListener("load", init);

const formDiv = document.querySelector("#form");
const formWrapper = document.querySelector(".formWrapper");
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
          img: "construction.png",
          textAbout:
            "Constructing a new house from scratch. This includes preparation of the construction site, materials and labor"
        },
        {
          title: "Structural modification",
          img: "roof.png",
          textAbout:
            "The building is already complete but needs to be modified, altered or improved."
        },
        {
          title: "Renovation",
          img: "work.png",
          textAbout:
            "The building is complete and needs to be renovated, repainted or completely restored. "
        },
        {
          title: "Other",
          img: "architect.png",
          textAbout:
            "The building is complete and needs to be renovated, repainted or completely restored. "
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "projectType");
      // form.setAttribute("class", "wrapper_4_columns");
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
        let nameInput = document.createElement("h3");
        nameInput.textContent = value.title;
        let img = document.createElement("div");
        img.style.backgroundImage = "url(img/" + value.img + ")";
        // setAttribute("src", "img/" + value.img);
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
    },
    answer: [
      {
        type_project: ""
      }
    ]
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
      // form.setAttribute("class", "wrapper_3_columns");
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
        let nameInput = document.createElement("h3");
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
    },
    answer: [
      {
        type_building: ""
      }
    ]
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
      selectComplexity.setAttribute("id", "complexity");
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
      let divForInput = document.createElement("div");
      let pForInput = document.createElement("p");
      pForInput.textContent = "Size of project:";
      let inputForSize = document.createElement("input");
      inputForSize.setAttribute("type", "number");
      inputForSize.setAttribute("id", "size");
      inputForSize.setAttribute("name", "sizeProject");
      inputForSize.placeholder = "Square meters";
      divForInput.append(pForInput, inputForSize);
      let divForCheckBox = document.createElement("div");
      let descPForCheckBox = document.createElement("p");
      descPForCheckBox.textContent = "Select the relevant architectural tasks:";
      let checkbox_1 = document.createElement("input");
      checkbox_1.setAttribute("type", "checkbox");
      checkbox_1.setAttribute("value", "concept");
      checkbox_1.setAttribute("id", "design1");
      checkbox_1.setAttribute("class", "checkDesign");
      let pForCheck_1 = document.createElement("p");
      pForCheck_1.setAttribute("class", "inline");
      pForCheck_1.textContent = "Concept design";
      let br_1 = document.createElement("br");
      let checkbox_2 = document.createElement("input");
      checkbox_2.setAttribute("type", "checkbox");
      checkbox_2.setAttribute("value", "schematic");
      checkbox_2.setAttribute("id", "design2");
      checkbox_2.setAttribute("class", "checkDesign");
      let pForCheck_2 = document.createElement("p");
      pForCheck_2.setAttribute("class", "inline");
      pForCheck_2.textContent = "Schematic design";
      let br_2 = document.createElement("br");
      let checkbox_3 = document.createElement("input");
      checkbox_3.setAttribute("type", "checkbox");
      checkbox_3.setAttribute("value", "detailed");
      checkbox_3.setAttribute("id", "design3");
      checkbox_3.setAttribute("class", "checkDesign");
      let pForCheck_3 = document.createElement("p");
      pForCheck_3.setAttribute("class", "inline");
      pForCheck_3.textContent = "Detailed design";
      let br_3 = document.createElement("br");
      let checkbox_4 = document.createElement("input");
      checkbox_4.setAttribute("type", "checkbox");
      checkbox_4.setAttribute("value", "tender");
      checkbox_4.setAttribute("id", "design4");
      checkbox_4.setAttribute("class", "checkDesign");
      let pForCheck_4 = document.createElement("p");
      pForCheck_4.setAttribute("class", "inline");
      pForCheck_4.textContent = "Tender";
      let br_4 = document.createElement("br");
      let checkbox_5 = document.createElement("input");
      checkbox_5.setAttribute("type", "checkbox");
      checkbox_5.setAttribute("value", "support");
      checkbox_5.setAttribute("id", "design5");
      checkbox_5.setAttribute("class", "checkDesign");
      let pForCheck_5 = document.createElement("p");
      pForCheck_5.setAttribute("class", "inline");
      pForCheck_5.textContent = "Construction to Build Support";
      let br_5 = document.createElement("br");
      let checkbox_6 = document.createElement("input");
      checkbox_6.setAttribute("type", "checkbox");
      checkbox_6.setAttribute("value", "all");
      checkbox_6.setAttribute("id", "design6");
      checkbox_6.setAttribute("class", "checkDesign");
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
      selectFloor.setAttribute("id", "floor");
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
      let divForToggle = document.createElement("div");
      let labelForToggel = document.createElement("label");
      let pForDivToggle = document.createElement("p");
      pForDivToggle.textContent = "Basement:";
      labelForToggel.setAttribute("class", "switch");
      // let pForToggle_1 = document.createElement("p");
      // pForToggle_1.textContent = "Yes";
      let inputForToggle = document.createElement("input");
      inputForToggle.setAttribute("type", "checkbox");
      inputForToggle.setAttribute("id", "toggleBox");
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
    },
    answer: [
      {
        complexity: ""
      },
      {
        size: ""
      },
      {
        task: ""
      },
      {
        floor: ""
      },
      {
        basememnt: ""
      }
    ]
  },
  {
    id: 4,
    txt: "Contact information",
    options: function() {
      let form = document.createElement("form");
      form.setAttribute("id", "contactForm");
      // form.setAttribute("class", "wrapper_5_rows");
      let divWrap_1 = document.createElement("div");
      let labelFname = document.createElement("label");
      labelFname.setAttribute("for", "fName");
      labelFname.innerHTML = "First name";
      let inputFname = document.createElement("input");
      inputFname.setAttribute("type", "text");
      inputFname.setAttribute("id", "first_name");
      inputFname.placeholder = "First name";
      divWrap_1.append(labelFname, inputFname);
      let labelLname = document.createElement("label");
      labelLname.setAttribute("for", "lName");
      labelLname.innerHTML = "Last name";
      let inputLname = document.createElement("input");
      inputLname.setAttribute("type", "text");
      inputLname.setAttribute("id", "last_name");
      inputLname.placeholder = "Last name";
      let divWrap_2 = document.createElement("div");
      divWrap_2.append(labelLname, inputLname);
      let labelPhone = document.createElement("label");
      labelPhone.setAttribute("for", "phone");
      labelPhone.innerHTML = "Phone number";
      let inputPhone = document.createElement("input");
      inputPhone.setAttribute("type", "tel");
      inputPhone.setAttribute("id", "phone");
      inputPhone.placeholder = "Phone number";
      let divWrap_3 = document.createElement("div");
      divWrap_3.append(labelPhone, inputPhone);
      let labelemail = document.createElement("label");
      labelemail.setAttribute("for", "email");
      labelemail.innerHTML = "Email";
      let inputEmail = document.createElement("input");
      inputEmail.setAttribute("type", "email");
      inputEmail.setAttribute("id", "email");
      inputEmail.placeholder = "Email";
      let divWrap_4 = document.createElement("div");
      divWrap_4.append(labelemail, inputEmail);
      let whatsupCheckbox = document.createElement("input");
      whatsupCheckbox.setAttribute("type", "checkbox");
      whatsupCheckbox.setAttribute("value", "whatsUp");
      whatsupCheckbox.setAttribute("id", "whatsUp");
      let pForWhatsUp = document.createElement("p");
      pForWhatsUp.setAttribute("class", "inline");
      pForWhatsUp.textContent = "I agree to be contected by WhatsApp";
      let divForWhats = document.createElement("div");
      divForWhats.append(whatsupCheckbox, pForWhatsUp);
      let agreeCheckbox = document.createElement("input");
      agreeCheckbox.setAttribute("type", "checkbox");
      agreeCheckbox.setAttribute("value", "gdpr");
      agreeCheckbox.setAttribute("id", "gdpr");
      agreeCheckbox.required = true;
      let pForGdpr = document.createElement("p");
      pForGdpr.setAttribute("class", "inline");
      pForGdpr.innerHTML =
        'I agree to the <a href="" class="link" >Terms of Service</a> and <a href="" class="link">Privacy Policy</a> of ArchitectureQuote IVS';
      let divForAgree = document.createElement("div");
      divForAgree.append(agreeCheckbox, pForGdpr);
      let newsCheckbox = document.createElement("input");
      newsCheckbox.setAttribute("type", "checkbox");
      newsCheckbox.setAttribute("value", "news");
      newsCheckbox.setAttribute("id", "news");
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
    },
    answer: [
      {
        name: ""
      },
      {
        last_name: ""
      },
      {
        phone: ""
      },
      {
        email: ""
      },
      {
        whatsApp: ""
      }
    ]
  }
];

let userAnswers = {
  type_project: "",
  type_of_building: "",
  complexity: "Standard",
  size: "",
  task: [],
  floor: "Ground floor only",
  basement: "",
  name: "",
  last_name: "",
  phone: "",
  email: "",
  whatsApp: "",
  news: ""
};

let startProjectBtns = document.querySelectorAll(".freeEst");
startProjectBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log({ formWrapper });
    formWrapper.classList.remove("hidden");
    // document.querySelector("body").appendChild(formDiv);
    insertDOMforForm();
  });
});
let closeFormBtn = document.querySelectorAll(".close");
closeFormBtn.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    // console.log(btn.parentElement.parentElement);
    btn.parentElement.parentElement.classList.add("hidden");
  })
})
// window.addEventListener("click", ()=>{
//   if(formWrapper.className="formWrapper"){
//     formWrapper.classList.add("hidden");
//   }
// });

function setNextBtnDisabled(bool) {
  document.getElementById("next").disabled = bool;
}

function insertDOMforForm() {
  if (formItems[currentFormItem].id == 1)
    document.querySelector("#prev").classList.add("hidden");

  options.appendChild(formItems[currentFormItem].options());
  questionText.textContent = formItems[currentFormItem].txt;

  listenerForRadios("#projectType", "type_project");
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
  setNextBtnDisabled(true);
  document.querySelector("#prev").style.display = "block";
  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";

  let currentItem = nextItem();
  questionText.textContent = currentItem.txt;

  options.appendChild(formItems[currentFormItem].options());
  if (formItems[currentFormItem].id == 2) {
    listenerForRadios("#buildingType", "type_of_building");
  }
  if (userAnswers) {
    if (formItems[currentFormItem].id == 1)
      insertSavedAnswersRadio("projectType", "type_project");
    if (formItems[currentFormItem].id == 2)
      insertSavedAnswersRadio("buildingType", "type_of_building");
  }

  if (formItems[currentFormItem].id == 3) {
    listenerForChange();
    //why this doesn't work when select first task then square?
    // document.querySelector("#projectDetails").addEventListener("change", () => {
    //   setTimeout(() => {
    //     console.log(userAnswers);
    //     if (userAnswers.task && userAnswers.size) {
    //       setNextBtnDisabled(false);
    //     }
    //   }, 100);
    // });
  }

  if (formItems[currentFormItem].id == 4) {
    document.querySelector("#next").style.display = "none";
    let submitBtn = document.createElement("input");
    submitBtn.value = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.setAttribute("class", "orange_button");
    submitBtn.disabled = true;
    document.querySelector("#buttonsForm").appendChild(submitBtn);
    listenerForInput("#first_name", "name");
    listenerForInput("#last_name", "last_name");
    listenerForInput("#phone", "phone");
    listenerForInput("#email", "email");
    document.querySelector("#whatsUp").addEventListener("click", () => {
      if (document.querySelector("#whatsUp").checked) {
        userAnswers.whatsApp = "yes";
      } else {
        userAnswers.whatsApp = "no";
      }
      console.log(userAnswers.whatsApp);
    });
    document.querySelector("#news").addEventListener("click", () => {
      if (document.querySelector("#news").checked) {
        userAnswers.news = "yes";
      } else {
        userAnswers.news = "no";
      }
    });
    document.querySelector("#contactForm").addEventListener("change", () => {
      if (
        (document.querySelector("#gdpr").checked &&
          userAnswers.name &&
          userAnswers.phone) ||
        (document.querySelector("#gdpr").checked &&
          userAnswers.name &&
          userAnswers.email)
      ) {
        submitBtn.disabled = false;
      }
    });
  }
}

const listenerForInput = (inputStr, answerTypeStr) => {
  let input = document.querySelector(inputStr);
  input.addEventListener("blur", () => {
    userAnswers[answerTypeStr] = input.value;
    console.log(userAnswers[answerTypeStr]);
  });
};

const insertSavedAnswersRadio = (sectionStr, answerTypeStr) => {
  let allRadios = document
    .getElementById(sectionStr)
    .querySelectorAll("input[type=radio]");
  let radioArr = Array.prototype.slice.call(allRadios);
  for (let u = 0; u < radioArr.length; u++) {
    if (radioArr[u].value == userAnswers[answerTypeStr]) {
      radioArr[u].checked = true;
      setNextBtnDisabled(false);
    }
  }
};

function prevElement() {
  setNextBtnDisabled(false);

  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";
  let currentItem = prevItem();
  form.querySelector("h3").textContent = currentItem.txt;

  options.appendChild(formItems[currentFormItem].options());

  if (formItems[currentFormItem].id == 1)
    insertSavedAnswersRadio("projectType", "type_project");
  if (formItems[currentFormItem].id == 2)
    insertSavedAnswersRadio("buildingType", "type_of_building");
  if (formItems[currentFormItem].id == 3) {
    document.querySelector("#submitBtn").style.display = "none";
    document.querySelector("#next").style.display = "block";

    document.querySelector("#complexity").value = userAnswers.complexity;
    document.querySelector("#size").value = userAnswers.size;
    document.querySelector("#floor").value = userAnswers.floor;
    if (userAnswers.basement == "yes") {
      document.querySelector("#toggleBox").checked = true;
    }
    insertCheckBoxForTask();
    listenerForChange();
  }
}

function listenerForChange() {
  document.querySelector("#complexity").addEventListener("click", function() {
    listenForValue("#complexity", "complexity");
  });
  document.querySelector("#size").addEventListener("keyup", function() {
    listenForValue("#size", "size");
  });

  document.querySelector("#floor").addEventListener("click", function() {
    listenForValue("#floor", "floor");
  });
  document.querySelector("#toggleBox").addEventListener("change", () => {
    if (document.querySelector("#toggleBox").checked) {
      userAnswers.basement = "yes";
      console.log("basememnt");
    } else {
      userAnswers.basement = "no";
      console.log(" no basememnt");
    }
  });
  checkAllBox();
  let allSelected = document.querySelectorAll(".checkDesign");
  let checkedTasksArray = [];
  //modify in final answers, if all there, then the answer is all
  allSelected.forEach(selected => {
    selected.addEventListener("click", () => {
      if (selected.checked == true) {
        checkedTasksArray.push(selected.value);
        // if (selected.value == "all") {
        //   checkedTasksArray = ["all"];
        // }
        userAnswers.task = checkedTasksArray;

        console.log(userAnswers.task);
      }
    });
  });
}

//ugly, rewrite
function checkAllBox() {
  document.querySelector("#design6").addEventListener("change", () => {
    if (document.querySelector("#design6").checked) {
      document.querySelector("#design1").checked = true;
      document.querySelector("#design2").checked = true;
      document.querySelector("#design3").checked = true;
      document.querySelector("#design4").checked = true;
      document.querySelector("#design5").checked = true;
      userAnswers.task = document.querySelector("#design6").value;
      console.log(userAnswers.task);
    } else {
      document.querySelector("#design1").checked = false;
      document.querySelector("#design2").checked = false;
      document.querySelector("#design3").checked = false;
      document.querySelector("#design4").checked = false;
      document.querySelector("#design5").checked = false;
    }
  });
}

function insertCheckBoxForTask() {
  console.log(userAnswers.task);
  let allCheckbox = document.querySelectorAll(".checkDesign");
  console.log(allCheckbox);

  if (userAnswers.task.includes("all")) {
    allCheckbox.forEach(checkBox => {
      checkBox.checked = true;
    });
  }

  allCheckbox.forEach(checkBox => {
    // let found = userAnswers.task.find(task => task == checkBox.value);
    // if (found) checkBox.checked = true;
    if (userAnswers.task.includes(checkBox.value)) {
      checkBox.checked = true;
    }
  });
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

function listenerForRadios(formType, answerType) {
  let allRadios = document
    .querySelector(formType)
    .querySelectorAll("input[type=radio]");

  allRadios.forEach(allRadio => {
    allRadio.addEventListener("click", () => {
      if (allRadio.checked == true) {
        let radioValue = allRadio.value;
        userAnswers[answerType] = radioValue;

        console.log({ radioValue });
        setNextBtnDisabled(false);
      }
    });
  });
}

function listenForValue(itemIDstr, answerTypestr) {
  let form = document.getElementById("projectDetails");
  let selectedItem = form.querySelector(itemIDstr);
  userAnswers[answerTypestr] = selectedItem.value;
  console.log(userAnswers[answerTypestr]);

  if (userAnswers.task && userAnswers.size) {
    setNextBtnDisabled(false);
  }
}

//clicking through the items

function resizeText(multiplier, p) {
  if (p.style.fontSize == "") {
    p.style.fontSize = "1.0em";
  }
  p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
}

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
      item.style.color = "#2c2e3e";
      item.style.fontWeight = "normal";
    }
  });
};

const applyStyle = item => {
  item.querySelector("h3").style.color = "#EF6461";
  item.querySelector("p").style.color = "#2c2e3e";
  resizeText(2, item.querySelector("h3"));
};

const changeImage = (item, section) => {
  let img = section.querySelector("img");
  console.log({ "item.id": item.id });

  if (item.id === "section_whatyouget_item_1")
    img.setAttribute("src", "img/formfirst.png");
  if (item.id === "section_whatyouget_item_2")
    img.setAttribute("src", "img/platform_home.png");
  if (item.id === "section_whatyouget_item_3")
    img.setAttribute("src", "img/laptop_placeholder.png");
  if (item.id === "resedential") img.setAttribute("src", "img/resihouse.png");
  if (item.id === "business") img.setAttribute("src", "img/office.png");
  if (item.id === "education") img.setAttribute("src", "img/school.png");
  if (item.id === "aestetic") img.setAttribute("src", "img/gazebo.png");
};

const applyFill = (item, section) => {
  if (section == section_platform) {
    item.querySelector("svg").style.fill = "#2c2e3e";
  }
  if (section == section_why) {
    item.querySelector("svg").style.fill = "#ef6461";
  }

  if (section == section_types) {
    item.style.color = "#ef6461";
    item.style.fontWeight = "bold";
  }
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

//end of clicking functions

//fetching data for frontpage

function fetchTestimonials() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/testimonial";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(data) {
        resolve(data);
      });
  });
}
function fetchBlogPosts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/posts";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(data) {
        resolve(data);
      });
  });
}

async function insertTestimonialsToDOM(testimonials) {
  let template = document.querySelector("#testimonialsTemplate").content;
  for (let i = 0; i < testimonials.length; i++) {
    let clone = template.cloneNode(true);
    clone.querySelector("#textTestimonials").innerHTML =
      testimonials[i].content.rendered;
    clone.querySelector("#title").textContent = testimonials[i].title.rendered;
    clone.querySelector("#name").textContent = testimonials[i].authors_name;
    clone.querySelector("#company").textContent = testimonials[i].company;
    console.log({ "testimonials[i]": testimonials[i] });
    const hrefData = await fetch(
      testimonials[i]._links["wp:featuredmedia"][0].href
    ).then(res => res.json());
    console.log({ hrefData });

    clone.querySelector("img")
      .setAttribute(
        "src",
        hrefData.media_details.sizes.testimonials.source_url
      );

    document.querySelector("#testimonials").appendChild(clone);
  }
  let clients = document.querySelectorAll(".client");
  initCarousel(clients);
}
// project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url

async function insertBlogsToDom(blogPosts) {
  const section = document.querySelector("#blogs");
  let templateBlogs = document.querySelector("#blogsTemplate").content;
  for (let i = 0; i < blogPosts.length; i++) {
    let clone = templateBlogs.cloneNode(true);
    clone.querySelector(".blogTitle").textContent = blogPosts[i].title.rendered;

    const hrefDataUrl = await fetch(
      blogPosts[i]._links["wp:featuredmedia"][0].href
    ).then(res => res.json());
    // console.log({ hrefData });`id -u
    clone.querySelector(".boxStyle").style.backgroundImage =
      "url(" + hrefDataUrl.media_details.sizes.medium_large.source_url + ")";
    section.appendChild(clone);
  }
}

/*   TESTIMONIALS CAROUSEL   */
let itemClassName = "client boxStyle",
  slide = 0,

function initCarousel(clients) {
  clients[clients.length - 1].classList.add("prev");
  clients[0].classList.add("activeSlide");
  clients[1].classList.add("next");
  const nextBtn = document.querySelector(".arrowRight");
  const prevBtn = document.querySelector(".arrowLeft");

  nextBtn.addEventListener("click", function() {
    moveNext(clients);
  });
  prevBtn.addEventListener("click", function() {
    movePrev(clients);
  });
}



function moveCarouselTo(slide, clients) {
  let newPrevious = slide - 1,
    newNext = slide + 1,
    oldPrevious = slide - 2,
    oldNext = slide + 2;

  if (clients.length - 1 > 3) {
    if (newPrevious <= 0) {
      oldPrevious = clients.length - 1;
    } else if (newNext >= clients.length - 1) {
      oldNext = 0;
    }
    if (slide === 0) {
      newPrevious = clients.length - 1;
      oldPrevious = clients.length - 2;
      oldNext = slide + 1;
    } else if (slide === clients.length - 1) {
      newPrevious = slide - 1;
      newNext = 0;
      oldNext = 1;
    }
    clients[oldPrevious].className = itemClassName;
    clients[oldNext].className = itemClassName;
    clients[newPrevious].className = itemClassName + " prev";
    clients[slide].className = itemClassName + " activeSlide";
    clients[newNext].className = itemClassName + " next";
  }
}

function moveNext(clients) {
  if (slide === clients.length - 1) {
    slide = 0;
  } else {
    slide++;
  }
  moveCarouselTo(slide, clients);
}

function movePrev(clients) {
  if (slide === 0) {
    slide = clients.length - 1;
  } else {
    slide--;
  }
  moveCarouselTo(slide, clients);
}

async function init() {
  const testimonials = await fetchTestimonials();
  const blogPosts = await fetchBlogPosts();
  // console.log(blogPosts);
  // console.log({ testimonials });
  insertTestimonialsToDOM(testimonials);
  insertBlogsToDom(blogPosts);
}
