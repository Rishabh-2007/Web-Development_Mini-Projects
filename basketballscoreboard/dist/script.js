let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

let count1 = 0
let count2 = 0

function add1() {
  count1 += 1 
  num1El.textContent = count1
}

function add2() {
  count1 += 2 
  num1El.textContent = count1
}

function add3() {
  count1 += 3 
  num1El.textContent = count1
}

function plus1() {
  count2 += 1 
  num2El.textContent = count2
}

function plus2() {
  count2 += 2
  num2El.textContent = count2
}

function plus3() {
  count2 += 3 
  num2El.textContent = count2
}

function reset1() {
  count1 = 0
  num1El.textContent = count1
}

function reset2() {
  count2 = 0
  num2El.textContent = count2
}