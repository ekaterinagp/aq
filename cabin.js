"use strict";

window.addEventListener("load", () => {
  init();
});

function fetchAllParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/wireframe1";
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

async function fetchImgForMorePart(parts) {
  const imgForMore = await fetch(
    parts[0]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForMore });
  return imgForMore;
}

// async function insertPartsToDOM(parts) {
// const backgroundIMG = await fetch(
//   parts[2]._links["wp:featuredmedia"][0].href
// ).then(res => res.json());
// console.log({ backgroundIMG });
// document.querySelector("#hero-img").style.backgroundImage =
//   "url(" + backgroundIMG.media_details.sizes.large.source_url + ")";
// document.querySelector("#hero-img").querySelector("h1").innerHTML =
//   parts[2].title.rendered;
// document.querySelector("#hero-img").querySelector("p").innerHTML =
//   parts[2].excerpt.rendered;

//   document
//     .querySelector("#wireframe_description")
//     .querySelector("h1").textContent = parts[1].title.rendered;
//   document
//     .querySelector("#wireframe_description")
//     .querySelector("p").innerHTML = parts[1].content.rendered;

//   document.querySelector("#benefits").querySelector("h1").innerHTML =
//     parts[0].title.rendered;
//   document.querySelector("#benefits_list").querySelector("p").innerHTML =
//     parts[0].content.rendered;
// }

// let sequenceNumber = 1;
// let slideShow = document.querySelector("#slide");

// function changeSrc() {
//   slideShow.src = "cabin/slideshow" + sequenceNumber + ".jpg";
//   sequenceNumber++;
//   if (sequenceNumber > 6) {
//     sequenceNumber = 0;
//   }
// }

async function init() {
  const wireframeParts = await fetchAllParts();
  console.log({ wireframeParts });
  const backgroundImg = await fetchBackgroundImg(wireframeParts);
  console.log({ backgroundImg });
  createAboveTheFold(wireframeParts, backgroundImg, 3);
  const imgForSecond = await fetchImgForSecondPart(wireframeParts);
  console.log({ imgForSecond });
  createSimpleImgTextLayout(wireframeParts, imgForSecond, 2);
  let imgsForCaruselle = [
    {
      num: "cabin/slideshow0.jpg"
    },
    {
      num: "cabin/slideshow1.jpg"
    },
    {
      num: "cabin/slideshow2.jpg"
    },
    {
      num: "cabin/slideshow3.jpg"
    },
    {
      num: "cabin/slideshow4.jpg"
    },
    {
      num: "cabin/slideshow5.jpg"
    },
    {
      num: "cabin/slideshow6.jpg"
    }
  ];
  createDivFromWP(wireframeParts, 1);
  const imgForMore = await fetchImgForMorePart(wireframeParts);
  createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 0);
  // insertPartsToDOM(wireframeParts);
  // setInterval(changeSrc, 4000);
}
