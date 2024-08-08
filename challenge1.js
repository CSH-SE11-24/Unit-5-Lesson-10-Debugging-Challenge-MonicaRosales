console.log("challenge1.js running");

let button = document.querySelector("#clickButton");
console.log(button);

let img = document.getElementById("image");
console.log(img);

button.addEventListener("click", function(event){
  console.log("image button clicked");
  img.src = "debugging.gif"
});