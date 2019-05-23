"use strict";
window.addEventListener("load", () => {
  init();
});

function fetchAllParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/wireframe2";
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
    parts[3]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ backgroundIMG });
  return backgroundIMG;
}

async function fetchImgForSecondPart(parts) {
  const imgForSecond = await fetch(
    parts[2]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForSecond });
  return imgForSecond;
}

async function fetchImgForLastPart(parts) {
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
  createAboveTheFold(wireframeParts, backgroundImg, 3);
  const imgForSecond = await fetchImgForSecondPart(wireframeParts);
  console.log({ imgForSecond });
  createSimpleImgTextLayout(wireframeParts, imgForSecond, 2);
  createTimeline(wireframeParts, 0);
  const imgForMore = await fetchImgForLastPart(wireframeParts);
  createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 1);
}