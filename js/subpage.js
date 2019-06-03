"use strict";

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

fetch("https://architecturequote.com/wp-json/wp/v2/posts/" + id)
  .then(e => e.json())
  .then(showSinglePost);

function showSinglePost(singlePost) {
  let divHolder = document.querySelector("#mainTextBlog");
  divHolder.querySelector("h1").textContent = singlePost.title.rendered;
  divHolder.querySelector("p").innerHTML = singlePost.content.rendered;
}
