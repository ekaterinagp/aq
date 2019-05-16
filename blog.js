"use strict";

window.addEventListener("load", () => {
  init();
});

function fetchBlogPosts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/posts";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(posts) {
        resolve(posts);
      });
  });
}

async function insertBlogsToDOM(posts) {
  let template = document.querySelector("template").content;
  let divForLatest = document.createElement("div");

  document.querySelector("#blog_front").appendChild(divForLatest);
  for (let i = 0; i < posts.length; i++) {
    let clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = posts[i].title.rendered;
    clone.querySelector("#text_blog").innerHTML = posts[i].excerpt.rendered;
    clone.querySelector("#dato").textContent = posts[i].date;
    const imgs = await fetch(posts[i]._links["wp:featuredmedia"][0].href).then(
      res => res.json()
    );
    console.log({ imgs });
    clone.querySelector("#blogBG").style.backgroundImage =
      "url(" + imgs.media_details.sizes.testimonials.source_url + ")";

    document.querySelector("#blog_front").appendChild(clone);
  }
  document.querySelector("#blogBG").style.height = "50%";
  divForLatest.appendChild(document.querySelector("#blogBG"));
}

async function init() {
  const blogs = await fetchBlogPosts();
  console.log({ blogs });
  insertBlogsToDOM(blogs);
}
