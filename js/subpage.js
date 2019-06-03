"use strict";

window.addEventListener("load", () => {
  init();
});

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

const fetchPost = () => {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/posts/" + id;
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(post) {
        resolve(post);
      });
  });
};

let showSinglePost = singlePost => {
  let divHolder = document.querySelector("#mainTextBlog");
  divHolder.querySelector("h1").textContent = singlePost.title.rendered;
  divHolder.querySelector("p").innerHTML = singlePost.content.rendered;
};

const init = async () => {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  const post = await fetchPost();
  showSinglePost(post);
};
