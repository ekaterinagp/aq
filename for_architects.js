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

/*direction aware hover effect
determine the mouse direction
apply css classes depending on direction
 */

var ourTeam = document.querySelector("#our_team>.wrapper_3_columns");
ourTeam.addEventListener("mousemove", getDirection=>{
  getDirection();
});

const getDirection = function (e, item) {
  // Width and height of current item
  let w = item.offsetWidth;
  let h = item.offsetHeight;
  let position = _getPosition(item);

  // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
  let x = (e.pageX - position.x - (w / 2) * (w > h ? (h / w) : 1));
  let y = (e.pageY - position.y - (h / 2) * (h > w ? (w / h) : 1));

  // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).  See https://stackoverflow.com/a/3647634 for a full explanation.
  let d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

  // console.table([x, y, w, h, e.pageX, e.pageY, item.offsetLeft, item.offsetTop, position.x, position.y]);

  return d;
};