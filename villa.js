"use strict";
window.addEventListener("load", () => {
  init();
});

function fetchAllParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/villa";
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

async function fetchImgForLastPart(parts) {
  const imgForMore = await fetch(
    parts[2]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForMore });
  return imgForMore;
}

async function init() {
  const wireframeParts = await fetchAllParts();
  console.log({ wireframeParts });
  const backgroundImg = await fetchBackgroundImg(wireframeParts);
  console.log({ backgroundImg });
  createAboveTheFold(wireframeParts, backgroundImg, 4);
  const ImgForCustomPart = await fetchImgForCustomPart(wireframeParts);

  sellingPointsForIndividuals(wireframeParts, 3, "villa/villa_laptop.png");

  createTimeline(wireframeParts, 1);
  const imgForMore = await fetchImgForLastPart(wireframeParts);
  createSimpleImgTextLayout(wireframeParts, ImgForCustomPart, 0);
  createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 2);
}
