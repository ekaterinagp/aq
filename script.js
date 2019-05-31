"use strict";

window.addEventListener("load", init);


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
      item.querySelector("h3").style.color="rgb(207, 205, 205)";
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

const removeAnimationClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

const changeImage = (item, img) => {
  // let img = section.querySelector("img");
  console.log({ "item.id": item.id });
  
  img.classList.add("change");
  if (item.id === "section_whatyouget_item_1")
    img.setAttribute("src", "img/form.png");
  if (item.id === "section_whatyouget_item_2")
    img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_whatyouget_item_3")
    img.setAttribute("src", "img/home.png");
  
  if (item.id === "resedential") img.setAttribute("src", "img/icons/buildings.svg");
  if (item.id === "business") img.setAttribute("src", "img/icons/cityscape.svg");
  if (item.id === "recreational") img.setAttribute("src", "img/icons/generic.svg");
  if (item.id === "aestetic") img.setAttribute("src", "img/icons/fountain.svg");
  if (item.id === "section_platform_item_1") img.setAttribute("src", "img/platform_home_single.png");
  if (item.id === "section_platform_item_2") img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_platform_item_3") img.setAttribute("src", "img/platform_chat_single.png");
  if (item.id === "section_platform_item_4") img.setAttribute("src", "img/platform_deal_single.png");
img.addEventListener("animationend", ()=>{
  removeAnimationClass(img, "change");
})
};

const applyFill = (item, section) => {
  if (section == section_platform) {
    item.querySelector("svg").style.fill = "#ef6461";
    item.querySelector("h3").style.color = "#ef6461";
  }
  if (section == section_why) {
    item.querySelector("svg").style.fill = "#ef6461";
    item.querySelector("h3").style.color = "#ef6461";;
  }

  if (section == section_types) {
    item.style.color = "#ef6461";
    item.style.fontWeight = "bold";
  }
};

const section_whatyouget = document.querySelector("#section_whatyouget");
let section_whatyouget_items = section_whatyouget.querySelectorAll(".item");
let section_whatyouget_img = section_whatyouget.querySelector(".absolute:nth-child(2)");
section_whatyouget_items.forEach(item => {
  item.addEventListener("click", () => {
    clearAllItemsStyle(section_whatyouget_items, "section_whatyouget");
    console.log({ item });
    applyStyle(item);
    changeImage(item, section_whatyouget_img);
  });
});

const changeText = (item, section) => {
  let textDiv = section.querySelector("p");
  let title = section.querySelector(".titleToChange");

  textDiv.classList.add("textAnimation");
  title.classList.add("textAnimation");
  if(section.id === "types"){
    document.querySelector(".big").classList.add("textAnimation");
  }
  if (item.id === "section_platform_item_1") {
    textDiv.textContent =
      "Overview of the process helps to avoid misunderstanding and prevent mistakes. It helps to identify the ongoing state of a process to know how it can be improved. It is also a way to structure and organize the process. ";
    title.textContent = "One place for all Architecture";
  }

  if (item.id == "section_platform_item_2") {
    textDiv.textContent =
      "We all know how important the right match is. With the help of the platform you get access to portfolios of many specialists at once and can choose the one for your taste, need and budget.";
    title.textContent = "Get the right match";
    // item.querySelector("h3").classList.add()
  }

  if (item.id == "section_platform_item_3") {
    textDiv.textContent =
      "It is important to avoid misunderstanding and miscommunication. The platform provides different communication tools, including integrated messangers and cloud storages. Reduce the noise for the better result. ";
    title.textContent = "Better communication";
  }
  if (item.id == "section_platform_item_4") {
    textDiv.textContent =
      "We provide all the tools to make the process as smooth as possible. Create profile, upload insperational images and requirements, browse architects portfolios, get digital proposals, follow the process online and let your dream project come true.";
    title.textContent = "Follow the process online";
  }
  if (item.id == "section_why_item_1") {
    title.textContent = "Save time";
    textDiv.textContent =
      "Start your project and get proposals from different architects instantly. It is free and will remain free!";
  }

  if (item.id == "section_why_item_2") {
    title.textContent = "Hassle free";
    textDiv.textContent =
      "Do not spend hours googling for architects and researching their portfolios in different places, all architects are here and looking forward to collaboration.";
  }

  if (item.id == "section_why_item_3") {
    title.textContent = "Better process";
    textDiv.textContent =
      "Improve commuication, get an overview, reduce the noise, build the house of your dreams";
  }

  if (item.id == "section_why_item_4") {
    title.textContent = "No obligation";
    textDiv.textContent =
      "The platform provides smooth and natural flow with no obligations before the contract is signed. No obligations, no pressure! Take your time and choose what fits you best! ";
  }
  if (item.id == "resedential") {
    document.querySelector(".big").textContent="Residential";
        document.querySelector("#type_of_firms").textContent = "resedential";
    textDiv.textContent =
      "Everybody dreams of a spacious luxurious or a modern cozy place to live. Whether you need a cabin, a villa or a family mansion, we have architects for any needs and budget.";
  }
  if (item.id == "business") {
    document.querySelector(".big").textContent="Business";
    document.querySelector("#type_of_firms").textContent = "business";
    textDiv.textContent =
      "In a competitive environment where improvement is foremost, to hire a good architect is essential. Do you need to construct a resedential complex, a new modern hospital,a large industrial building or a family-driven brewery? We have spectialists in all of the types and they are ready to start building proposals!";
  }
  if (item.id == "recreational") {
    document.querySelector(".big").textContent="Recreational";
    document.querySelector("#type_of_firms").textContent = "Recreational";
    textDiv.textContent =
      "Recreational architecture has its own specifics, it is not just about functionality, it should bring people together. Schools, universities, research centers, kindergartens,campuses - find the right architect for you with the help of the platform! ";
  }
  if (item.id == "aestetic") {
    document.querySelector(".big").textContent="Design";
    document.querySelector("#type_of_firms").textContent = "design";
    textDiv.textContent =
      "Do you want to get a breath of fresh air at your favourite place? Architects know how to create a unique and functional atmosphere. Why waiting? Start you project now and make your home even better.";
  }
  textDiv.addEventListener("animationend", ()=>{
    console.log("removed");
    removeAnimationClass(textDiv, "textAnimation");
  });
  title.addEventListener("animationend", ()=>{
    console.log("removed");
    removeAnimationClass(title, "textAnimation");
  });
  if(section.id === "types"){
    document.querySelector(".big").addEventListener("animationend", ()=>{
      removeAnimationClass(document.querySelector(".big"), "textAnimation");
    })
   
      }
};

const section_platform = document.querySelector("#section_platform");
let section_platform_items = section_platform.querySelectorAll(".icon");
let section_platform_img = section_platform.querySelector(".absolute:nth-child(3)");
section_platform_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_platform_items, "section_platform");
    applyFill(item, section_platform);
    changeText(item, section_platform);
    changeImage(item, section_platform_img);
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
let section_types_img = section_types.querySelector(".houseIcon");
section_types_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_types_items, "section_types");
    changeText(item, section_types);
    changeImage(item, section_types_img);
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
  let endpoint =
    "https://architecturequote.com/wp-json/wp/v2/posts?_embed&per_page=4";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(data) {
        resolve(data);
      });
  });
}

async function insertTestimonialsToDOM(testimonials) {
  // let imgTemplate = document.querySelector("#testimonialsImg").content;
  let template = document.querySelector("#testimonialsTemplate").content;
  for (let i = 0; i < testimonials.length; i++) {
    // let imgClone = imgTemplate.cloneNode(true);
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

    clone
      .querySelector("#userImage")
      .style.backgroundImage="url("+
        hrefData.media_details.sizes.medium.source_url +")";
      
    // imgClone.querySelector("img")
    // .setAttribute(
    //   "src",
    //   hrefData.media_details.sizes.testimonials.source_url
    // );
    // imgClone.querySelector("img")
    // .setAttribute("class", testimonials[i].title.rendered );

    // document.querySelector("#imgSection").appendChild(imgClone);
    document.querySelector("#testimonials").appendChild(clone);
  }

  let clients = document.querySelectorAll(".client");
  // let allClientImg = document.querySelectorAll("#tempImg");
  // allClientImg.forEach(img =>{
  //   img.addEventListener("click", ()=>{
  //     console.log(img.className);
  //   })
  // })
  initCarousel(clients);
}
// project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url

async function insertBlogsToDom(blogPosts) {
  const section = document.querySelector("#frontpageBlogs");
  let templateBlogs = document.querySelector("#blogsTemplate").content;
  for (let i = 0; i < blogPosts.length; i++) {
    let clone = templateBlogs.cloneNode(true);
    clone.querySelector(".blogTitle").textContent = blogPosts[i].title.rendered;
    
    let a = document.createElement("a");
    a.href = "subpage_blog.html?id=" + blogPosts[i].id;
    a.appendChild(clone.querySelector(".blogTitle"));
    clone.querySelector(".boxStyle").appendChild(a);

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
  slide = 0;

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

function startSvgAnimation() {
  let title = document.querySelector(".hero_text>h1");
  let subTitle = document.querySelector(".hero_text>p")
 title.classList.add("textAnimation");
  subTitle.classList.add("textAnimation");
  let svg = document.querySelector(".drawSvg");
  let drawFirst = document.querySelector("#first").children;
  let n = 0;
  svg.style.visibilty = "initial;";

  console.log(drawFirst);
  for (let i = 0; i < drawFirst.length; i++) {
    drawFirst[i].classList.add("draw");
    // drawFirst[i].style.animationDelay = (n += 0.03) + "s";
    // console.log(n);
  }
  greenSockFade();
}

function greenSockFade() {
  let figure = document.querySelector(".heroImg");
  TweenMax.fromTo(
    figure,
    1,
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: Power3.easeIn
    },
    5
  );

  let laptop = document.querySelector(".hero_laptop");
  TweenMax.from(
    laptop,
    1,
    {
      opacity: 0,
      ease: Power3.easeIn
    },
    10
  );
}



async function init() {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  startSvgAnimation();
  const testimonials = await fetchTestimonials();
  const blogPosts = await fetchBlogPosts();
  // console.log(blogPosts);
  // console.log({ testimonials });
  insertTestimonialsToDOM(testimonials);
  insertBlogsToDom(blogPosts);
}
