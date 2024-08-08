console.log("script.js running");

let button = document.querySelector("lowerCaseButton");
console.log(button);

let h1 = document.getElementById("hello");
console.log(h1);

button.addEventListener("click", function(event){
  console.log("lowercase clicked") ;
  h1.textContent = "hello there"
})

let button = document.querySelector("#uppercaseButton");
console.log(button);

button.addEventListener(click, function(event){
  console.log("uppercase clicked") ;
  button.textContent = "HELLO THERE";
});