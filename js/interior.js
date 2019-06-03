"use strict";

window.addEventListener("load", () => {
  init();
});

function fetchAllParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/interior";
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
function timelineAnimation() {
  let tl = new TimelineMax();
  tl.staggerFromTo(
    ".timelineWrapper",
    0.3,
    {
      scale: 1.2,
      opacity: 0,
      skewY: 15
    },
    { scale: 1, opacity: 1, skewY: 0, ease: Power1.easeInOut },
    0.2
  ).staggerFromTo(
    ".timelineContent",
    0.3,
    {
      opacity: 0
    },
    {
      opacity: 1
    },
    0.1
  );
}

async function init() {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  const wireframeParts = await fetchAllParts();
  console.log({ wireframeParts });
  const backgroundImg = await fetchBackgroundImg(wireframeParts);
  console.log({ backgroundImg });
  createAboveTheFold(wireframeParts, backgroundImg, 4);
  const ImgForCustomPart = await fetchImgForCustomPart(wireframeParts);
  // console.log({ imgForSecond });

  sellingPointsForIndividuals(
    wireframeParts,
    3,
    "interior/interior_laptop.png"
  );
  createTimeline(wireframeParts, 2);
  const imgForMore = await fetchImgForMorePart(wireframeParts);
  createSimpleImgTextLayout(wireframeParts, ImgForCustomPart, 0);
  createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 1);
  checkIfInView();

}
