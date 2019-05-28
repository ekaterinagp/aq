"use strict";

function createButtonForForm(textStr, additionalClass) {
  let button = document.createElement("button");
  let classesToAdd = ["orange_button", additionalClass];

  button.classList.add(...classesToAdd);

  button.textContent = textStr;
  button.addEventListener("click", () => {
    createFormWrapper();
  });
  return button;
}

function changeSrc(slideShow, imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    slideShow.src = imgArray[i].num;
    if (i > imgArray.length) {
      i = 0;
    }
  }
}

//creates a simple above-the-fold with a background image, h1 and subtitle from WP
function createAboveTheFold(parts, img, i) {
  let abovetheFoldHolder = document.createElement("div");
  abovetheFoldHolder.setAttribute("id", "hero-img");
  abovetheFoldHolder.setAttribute("class", "heroWireframe");
  abovetheFoldHolder.style.backgroundImage =
    "url(" + img.media_details.sizes.large.source_url + ")";
  let divForText = document.createElement("div");
  divForText.setAttribute("class", "hero_text");
  let h1 = document.createElement("h1");
  h1.innerHTML = parts[i].title.rendered;
  let p = document.createElement("p");
  p.setAttribute("class", "sub_title");
  p.innerHTML = parts[i].content.rendered;
  let button = createButtonForForm("Get your free estimate", "freeEst");
  divForText.append(h1, p, button);
  abovetheFoldHolder.append(divForText);
  document.querySelector(".wrapper").append(abovetheFoldHolder);
}

function createSimpleImgTextLayout(parts, pic, i) {
  let div = document.createElement("div");
  div.setAttribute("id", "wireframe_description");
  div.setAttribute("class", "wrapper_2_columns");
  let gradient = document.createElement("div");
  gradient.setAttribute("class", "gradient");
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "header");
  h1.textContent = parts[i].title.rendered;
  let divForP = document.createElement("div");
  let pText = document.createElement("p");
  let classesToAdd = ["description_text", "textPadding"];
  pText.classList.add(...classesToAdd);
  pText.innerHTML = parts[i].content.rendered;
  divForP.append(pText);
  // let divForImg = document.createElement("div");
  // divForImg.setAttribute("class", "platformImg");
  let img = document.createElement("img");
  img.setAttribute("id", "platform");
  img.src = pic.media_details.sizes.large.source_url;
  // divForImg.appendChild(img);
  div.append(gradient, h1, divForP, img);
  document.querySelector(".wrapper").append(div);
}

function createDivFromWP(parts, i) {
  let divHolder = document.createElement("div");
  divHolder.setAttribute("id", "benefits");
  // divHolder.setAttribute("class", "wrapper_2_columns");
  let gradient = document.createElement("div");
  gradient.setAttribute("class", "gradient_reverse");
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "header");
  h1.innerHTML = parts[i].title.rendered;
  let pDiv = document.createElement("div");
  pDiv.id = "benefits_list";
  let pText = document.createElement("p");
  pText.innerHTML = parts[i].content.rendered;

  pDiv.append(pText);
  divHolder.append(gradient, h1, pDiv);
  document.querySelector(".wrapper").append(divHolder);
}

function createSimple2ColumnsBGTextRight(parts, img, i) {
  let divHolder = document.createElement("div");
  divHolder.setAttribute("id", "forMore");
  divHolder.setAttribute("class", "textOnImage");
  divHolder.style.backgroundImage =
    "url(" + img.media_details.sizes.large.source_url + ")";
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "header");
  h1.innerHTML = parts[i].title.rendered;
  let pDiv = document.createElement("div");
  pDiv.id = "more";
  let pText = document.createElement("p");
  pText.innerHTML = parts[i].content.rendered;
  let link = document.createElement("a");
  link.href = "platform.html";
  let button = createButtonForForm("Read more", "class");
  link.append(button);
  pDiv.append(pText, link);
  divHolder.append(h1, pDiv);
  document.querySelector(".wrapper").append(divHolder);
}

function createTimeline(parts, i) {
  let div = document.createElement("div");
  div.id = "timelineSection";
  div.setAttribute("class", "fullScreen");
  let h1 = document.createElement("h1");
  h1.innerHTML = parts[i].title.rendered;
  let divForContent = document.createElement("div");
  divForContent.innerHTML = parts[i].content.rendered;
  div.append(h1, divForContent);
  document.querySelector(".wrapper").append(div);
}

// layout for the hero part with img and text next to each other
// function aboveTheFoldWith2parts(parts, img, i) {
//   let abovetheFoldHolder = document.createElement("div");
//   abovetheFoldHolder.setAttribute("id", "hero-img");
//   abovetheFoldHolder.setAttribute("class", "wrapper_2_columns");
//   let pic = document.createElement("img");
//   pic.setAttribute("src", img.media_details.sizes.large.source_url);
//   // abovetheFoldHolder.setAttribute("class", "heroWireframe");
//   // abovetheFoldHolder.style.backgroundImage =
//   //   "url(" + img.media_details.sizes.large.source_url + ")";
//   let divForText = document.createElement("div");
//   divForText.setAttribute("class", "hero_text");
//   let h1 = document.createElement("h1");
//   h1.innerHTML = parts[i].title.rendered;
//   let p = document.createElement("p");
//   p.setAttribute("class", "sub_title");
//   p.innerHTML = parts[i].content.rendered;
//   let button = createButtonForForm("Get your free estimate", "freeEst");
//   divForText.append(h1, p, button);
//   abovetheFoldHolder.append(pic, divForText);
//   document.querySelector(".wrapper").append(abovetheFoldHolder);
// }

function sellingPointsForIndividuals(parts, i) {
  let divHolder = document.createElement("div");
  divHolder.id = "section_whatyouget";
  let classesToAdd = ["fullScreen", "wrapper_2_columns_rows"];
  divHolder.classList.add(...classesToAdd);
  let h1 = document.createElement("h1");
  h1.classList.add("section_title");
  h1.textContent = parts[i].title.rendered;
  let h2 = document.createElement("h2");
  h2.classList.add("sub_title");
  h2.innerHTML = parts[i].excerpt.rendered;
  let divTextHolder = document.createElement("div");
  divTextHolder.classList.add("textPadding");
  divTextHolder.innerHTML = parts[i].content.rendered;
  let divImgHolder = document.createElement("div");
  divImgHolder.classList.add("img_wrapper");
  let img_1 = document.createElement("img");
  img_1.classList.add("absolute");
  img_1.src = "img/empty.png";
  let img_2 = document.createElement("img");
  img_2.classList.add("absolute");
  img_2.src = "img/form.png";
  divImgHolder.append(img_1, img_2);
  divHolder.append(h1, h2, divTextHolder, divImgHolder);
  document.querySelector(".wrapper").append(divHolder);
  sectionWhatYouGet();
}

function sectionWhatYouGet() {
  const section_whatyouget = document.querySelector("#section_whatyouget");
  let section_whatyouget_items = section_whatyouget.querySelectorAll(".item");
  let section_whatyouget_img = section_whatyouget.querySelector(
    ".absolute:nth-child(2)"
  );
  section_whatyouget_items.forEach(item => {
    item.addEventListener("click", () => {
      clearAllItemsStyle(section_whatyouget_items, "section_whatyouget");
      console.log({ item });
      applyStyle(item);
      changeImage(item, section_whatyouget_img);
    });
  });
}

const changeImage = (item, img) => {
  // let img = section.querySelector("img");
  console.log({ "item.id": item.id });

  img.classList.add("change");
  if (item.id === "section_whatyouget_item_1")
    img.setAttribute("src", "img/form.png");
  if (item.id === "section_whatyouget_item_2")
    img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_whatyouget_item_3")
    img.setAttribute("src", "cabin/summerhouse.jpg");
  // if (item.id === "resedential") img.setAttribute("src", "img/resihouse.png");
  // if (item.id === "business") img.setAttribute("src", "img/office.png");
  // if (item.id === "education") img.setAttribute("src", "img/school.png");
  // if (item.id === "aestetic") img.setAttribute("src", "img/gazebo.png");
  // if (item.id === "section_platform_item_1") img.setAttribute("src", "img/platform_home_single.png");
  // if (item.id === "section_platform_item_2") img.setAttribute("src", "img/platform_discover_single.png");
  // if (item.id === "section_platform_item_3") img.setAttribute("src", "img/platform_chat_single.png");
  // if (item.id === "section_platform_item_4") img.setAttribute("src", "img/platform_deal_single.png");
  img.addEventListener("animationend", () => {
    removeAnimationClass(img, "change");
  });
};

const clearAllItemsStyle = (items, sectionName) => {
  items.forEach(item => {
    if (sectionName === "section_whatyouget") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
    // if (sectionName === "section_platform" || sectionName === "section_why") {
    //   item.querySelector("svg").style.fill = "rgb(207, 205, 205)";
    //   item.querySelector("h3").style.color="rgb(207, 205, 205)";
    // }
    // if (sectionName == "section_types") {
    //   item.style.color = "#2c2e3e";
    //   item.style.fontWeight = "normal";
    // }
  });
};

const applyStyle = item => {
  item.querySelector("h3").style.color = "#EF6461";
  item.querySelector("p").style.color = "#2c2e3e";
  resizeText(2, item.querySelector("h3"));
};

function resizeText(multiplier, p) {
  if (p.style.fontSize == "") {
    p.style.fontSize = "1.0em";
  }
  p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
}

const removeAnimationClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};
