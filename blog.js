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

  console.log({ posts });

  let divForLatestBlog = document.querySelector("#latestBlog");
  divForLatestBlog.querySelector("h2").textContent = posts[0].title.rendered;
  divForLatestBlog.querySelector("#latestBlog_text_blog").innerHTML =
    posts[0].excerpt.rendered;
  divForLatestBlog.querySelector("#latestBlog_date").textContent =
    posts[0].date;
  const imgLatestBlog = await fetch(
    posts[0]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divForLatestBlog.style.backgroundImage =
    "url(" + imgLatestBlog.media_details.sizes.full.source_url + ")";

  for (let i = 1; i < posts.length; i++) {
    let clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = posts[i].title.rendered;
    clone.querySelector("#text_blog").innerHTML = posts[i].excerpt.rendered;
    clone.querySelector("#date").textContent = posts[i].date;
    const imgs = await fetch(posts[i]._links["wp:featuredmedia"][0].href).then(
      res => res.json()
    );
    console.log({ imgs });
    clone.querySelector(".blogBG").style.backgroundImage =
      "url(" + imgs.media_details.sizes.full.source_url + ")";

    document.querySelector("#blogs").appendChild(clone);
  }
  // let allBlogs = document.querySelectorAll(".blogBG");
  // let latestBlog = allBlogs[0];
  // latestBlog.setAttribute("id", "lastBlog");
  // console.log({ latestBlog });
  // divForLastBlog.append(latestBlog);
  // document.querySelector("#blogBG").style.width = "50%";
  // document.querySelector("#blogBG").style.height = "50%";
  // divForLatest.appendChild(document.querySelector(".blogBG"));
}

async function init() {
  const blogs = await fetchBlogPosts();
  console.log({ blogs });
  insertBlogsToDOM(blogs);
}
