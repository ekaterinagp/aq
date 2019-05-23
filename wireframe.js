"use strict";

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
  p.innerHTML = parts[i].excerpt.rendered;
  let button = createButtonForForm();
  divForText.append(h1, p, button);
  abovetheFoldHolder.append(divForText);
  document.querySelector(".wrapper").append(abovetheFoldHolder);
}

function createButtonForForm() {
  let button = document.createElement("button");
  let classesToAdd = ["orange_button", "freeEst"];

  button.classList.add(...classesToAdd);

  button.textContent = "Get your free estimate";
  return button;
}
