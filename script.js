let number = 0 // Defines number as a variable.

document.body.style.backgroundColor = '#ffddd2' // Sets the background colour of the HTML body.
document.getElementById('calc').addEventListener('click', square) // Creates an event listener for calculate button, which then triggers the square function.

function square () {
  number = document.getElementById('input').value // Takes user input from input box and sets it to the number variable.
  number = parseInt(number) // Turns the inputted number from a string into an integer.
  number = Math.pow(number, 2) // Squares the inputted number.
  alert('Your number is ' + number) // Gives an alert to the user of the result of the function.
}
