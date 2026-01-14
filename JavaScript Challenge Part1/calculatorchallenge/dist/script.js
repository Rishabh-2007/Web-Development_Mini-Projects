let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("sum-el")

function add() {
  result = num1 + num2
  sumEL.textContent = "Sum:" + result 
}

function subtract() {
  result = num1 - num2
  sumEL.textContent = "Subtraction: " + result
}

function multiply() {
  result = num1 * num2
  sumEL.textContent = "Multiplication: " + result
}

function divide() {
  result = num1 / num2
  sumEL.textContent = "Division: " + num1 / num2
}