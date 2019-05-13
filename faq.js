let endpoint = "https://architecturequote.com/wp-json/wp/v2/faq"
window.addEventListener("load", function() {
    init();
  });

  function fetchFaq() {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then(response => response.json())
        .then(function(data) {
          resolve(data);
        });
    });
  }

  function showFaq(faqData){
      let templateFaq = document.querySelector(".faqTemplate").content;
      let allFaq = document.querySelector("section");
 
    // clone.querySelector(".question").textContent = faqData[0].title.rendered;
    // clone.querySelector(".answer").innerHTML = faqData[0].content.rendered;
    for (let i = 0; i < faqData.length; i++) {
        let clone = templateFaq.cloneNode(true);
        clone.querySelector(".question").textContent =
          faqData[i].title.rendered;
          clone.querySelector(".answer").innerHTML = faqData[i].content.rendered;
          allFaq.appendChild(clone);
      }
      
  }

async function init() {
  const faqData = await fetchFaq();
  console.log(faqData);
  showFaq(faqData);
  let plusses = document.querySelectorAll(".plus");
  plusses.forEach(plus=>{
      plus.addEventListener("click", function(){
          console.log(plus.nextElementSibling.className)
          if(plus.nextElementSibling.className === "answer"){
            plus.parentElement.style.height = "auto";
          }
            else{
                plus.parentElement.style.height = "60px"; 
            }
            plus.nextElementSibling.classList.toggle("show");
      })
  })
}