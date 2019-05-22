"use strict";

window.addEventListener("load", () => {
  init();
});

function fetchParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/wireframe1";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(parts) {
        resolve(parts);
      });
  });
}

async function insertPartsToDOM(parts) {
  const backgroundIMG = await fetch(
    parts[2]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ backgroundIMG });
  document.querySelector("#hero-img").style.backgroundImage =
    "url(" + backgroundIMG.media_details.sizes.large.source_url + ")";
  document.querySelector("#hero-img").querySelector("h1").innerHTML =
    parts[2].title.rendered;
  document.querySelector("#hero-img").querySelector("p").innerHTML =
    parts[2].excerpt.rendered;

  document
    .querySelector("#wireframe_description")
    .querySelector("h3").textContent = parts[1].title.rendered;
  document
    .querySelector("#wireframe_description")
    .querySelector("p").innerHTML = parts[1].content.rendered;

  document.querySelector("#benefits_list").querySelector("h3").innerHTML =
    parts[0].title.rendered;
  document.querySelector("#benefits_list").querySelector("p").innerHTML =
    parts[0].content.rendered;
}

let sequenceNumber = 1;
let slideShow = document.querySelector("#slide");

function changeSrc() {
  slideShow.src = "cabin/slideshow" + sequenceNumber + ".jpg";
  sequenceNumber++;
  if (sequenceNumber > 6) {
    sequenceNumber = 0;
  }
}

async function init() {
  const wireframeParts = await fetchParts();
  console.log({ wireframeParts });
  insertPartsToDOM(wireframeParts);
  setInterval(changeSrc, 4000);
}
