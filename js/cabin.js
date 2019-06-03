"use strict";

window.addEventListener("load", () => {
  init();
});

function fetchAllParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/cabin";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(parts) {
        resolve(parts);
      });
  });
}

async function fetchBackgroundImg(parts) {
  const backgroundIMG = await fetch(
    parts[4]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ backgroundIMG });
  return backgroundIMG;
}

async function fetchImgForCustomPart(parts) {
  const imgForSecond = await fetch(
    parts[0]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForSecond });
  return imgForSecond;
}

async function fetchImgForMorePart(parts) {
  const imgForMore = await fetch(
    parts[1]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForMore });
  return imgForMore;
}

async function init() {
  const wireframeParts = await fetchAllParts();
  console.log({ wireframeParts });
  const backgroundImg = await fetchBackgroundImg(wireframeParts);
  console.log({ backgroundImg });
  //creates the first part of the website with a picture as a background, title, subtitle and CTA
  createAboveTheFold(wireframeParts, backgroundImg, 4);
  const ImgForCustomPart = await fetchImgForCustomPart(wireframeParts);
  //creates a div with clickable selling points and animation of the images, which runs accordingly
  sellingPointsForIndividuals(wireframeParts, 3, "cabin/summerhouse.png");
  //creates a timeline for the process
  createDivFromWP(wireframeParts, 2);
  const imgForMore = await fetchImgForMorePart(wireframeParts);
  //creates a simple layout - text and image
  createSimpleImgTextLayout(wireframeParts, ImgForCustomPart, 0);
  //creates a 2 column layout with an image as a background, text and CTA
  createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 1);
}
