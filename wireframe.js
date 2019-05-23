"use strict";

function createButtonForForm(textStr, additionalClass) {
  let button = document.createElement("button");
  let classesToAdd = ["orange_button", additionalClass];

  button.classList.add(...classesToAdd);

  button.textContent = textStr;
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
  abovetheFoldHolder.setAttribute("class", "hero");
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
  let divForImg = document.createElement("div");
  divForImg.setAttribute("class", "platformImg");
  let img = document.createElement("img");
  img.setAttribute("id", "platform");
  img.src = pic.media_details.sizes.large.source_url;
  divForImg.appendChild(img);
  div.append(gradient, h1, divForP, divForImg);
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
