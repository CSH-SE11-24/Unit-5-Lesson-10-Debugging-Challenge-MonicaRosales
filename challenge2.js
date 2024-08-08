console.log("challenge2.js running");

let img = document.getElementById("fine");
console.log(img);

img.addEventListener("mouseover", function(event){
  console.log("on image");
  img.src = "not-fine.gif"
});

img.addEventListener("mouseout", function(event){
  console.log("off image");
  img.src = "fine.gif"
});