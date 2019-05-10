let speechBubbles = document.querySelectorAll(".items");
speechBubbles.forEach(bubble =>{
  bubble.addEventListener("click", ()=>{
    // console.log(bubble);
    shrinkRemoveArrow()
    growAddArrow(bubble);
 
  })
})
function growAddArrow(box){
  box.classList.add("arrow");
  box.classList.add("grow");
}
function shrinkRemoveArrow(){
    speechBubbles.forEach(bubble =>{
        bubble.classList.remove("arrow");
        bubble.classList.remove("grow");
    })
}