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

async function insertThreeLastBlogsInDOM(
  divHolderStr,
  positionInArray,
  textHolderStr,
  dateHolderStr,
  posts
) {
  let divHolder = document.querySelector(divHolderStr);
  console.log("divHolder", divHolder);
  divHolder.querySelector("h2").textContent =
    posts[positionInArray].title.renderd;
  divHolder.querySelector(textHolderStr).innerHTML =
    posts[positionInArray].excerpt.rendered;
  divHolder.querySelector(dateHolderStr).textContent =
    posts[positionInArray].date;
  const imgLatestBlog = await fetch(
    posts[positionInArray]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divHolder.style.backgroundImage =
    "url(" + imgLatestBlog.media_details.sizes.full.source_url + ")";
}

async function insertBlogsToDOM(posts) {
  let template = document.querySelector("template").content;

  console.log({ posts });

  insertThreeLastBlogsInDOM(
    "#latestBlog",
    0,
    "#latestBlog_text_blog",
    "#latestBlog_date",
    posts
  );
  // let divForLatestBlog = document.querySelector("#latestBlog");
  // divForLatestBlog.querySelector("h2").textContent = posts[0].title.rendered;
  // divForLatestBlog.querySelector("#latestBlog_text_blog").innerHTML =
  //   posts[0].excerpt.rendered;

  // divForLatestBlog.querySelector("#latestBlog_date").textContent =
  //   posts[0].date;
  // const imgLatestBlog = await fetch(
  //   posts[0]._links["wp:featuredmedia"][0].href
  // ).then(res => res.json());
  // divForLatestBlog.style.backgroundImage =
  //   "url(" + imgLatestBlog.media_details.sizes.full.source_url + ")";

  let divForSecondLast = document.querySelector("#secondLatestBlog");
  divForSecondLast.querySelector("h2").textContent = posts[1].title.rendered;
  divForSecondLast.querySelector("#secondLatestBlog_text_blog").innerHTML =
    posts[1].excerpt.rendered;
  divForSecondLast.querySelector("#secondLatestBlog_date").textContent =
    posts[1].date;
  const imgSecondLatestBlog = await fetch(
    posts[1]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divForSecondLast.style.backgroundImage =
    "url(" + imgSecondLatestBlog.media_details.sizes.medium.source_url + ")";
  let divForThirdLast = document.querySelector("#thirdLatestBlog");
  divForThirdLast.querySelector("h2").textContent = posts[2].title.rendered;
  divForThirdLast.querySelector("#thirdLatestBlog_text_blog").innerHTML =
    posts[2].excerpt.rendered;
  divForThirdLast.querySelector("#thirdLatestBlog_date").textContent =
    posts[2].date;
  const imgThirdLatestBlog = await fetch(
    posts[2]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divForThirdLast.style.backgroundImage =
    "url(" + imgThirdLatestBlog.media_details.sizes.medium.source_url + ")";
  for (let i = 3; i < posts.length; i++) {
    let clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = posts[i].title.rendered;
    clone.querySelector("#text_blog").innerHTML = posts[i].excerpt.rendered;

    let a = document.createElement("a");
    a.href = "subpage_blog.html?id=" + posts[i].id;
    a.appendChild(clone.querySelector(".excerpt-hellip"));
    clone.querySelector("#text_blog").appendChild(a);
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
