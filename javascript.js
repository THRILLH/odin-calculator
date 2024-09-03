// When the user clicks a number button
// Display the number on screen and record it in a variable
// If the user clicks another number button
// Concat that number to the end of the previous one and display

// When the user clicks an operator
// Prime that operator as the one to be used and display

// Show the next number(s) as in the first step, record and display

// When the user clicks 'equals'
// Run the calculation as displayed

function add(num1, num2) {
    return num1 + num2;
}



function operate(num1, num2) {
    if (operator === "add") {
        return add(num1, num2)
    }
}
let operator = "add";
let num1 = 3;
let num2 = 5;

console.log(operate(num1, num2));