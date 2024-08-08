console.log("challenge3.js running");

let input1 = document.querySelector("#step1")
console.log(input1)
let p1 = document.querySelector("#step1Text")
console.log(p1)

input1.addEventListener("keypress", function(event){
  if (input1.value === "Select elements"){
    p1.textContent = "Correct!"
  } else {
    p1.textContent = "Not quite..."
  }
})

// Set up the other two steps to work correctly as well!

let input2 = document.querySelector("#step2")
console.log(input2)
let p2 = document.querySelector("#step2Text")
console.log(p2)

input2.addEventListener("keypress", function(event){
  if (input2.value === "Listen for event"){
    p2.textContent = "Correct!"
  } else {
    p2.textContent = "Not quite..."
  }
})

let input3 = document.querySelector("#step3")
console.log(input3)
let p3 = document.querySelector("#step3Text")
console.log(p3)

input1.addEventListener("keypress", function(event){
  if (input3.value === "Execute action"){
    p3.textContent = "Correct!"
  } else {
    p3.textContent = "Not quite..."
  }
})