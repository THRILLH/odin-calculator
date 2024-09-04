// When the user clicks a number button
// Display the number on screen and record it in a variable
// If the user clicks another number button
// Concat that number to the end of the previous one and display

// When the user clicks an operator
// Prime that operator as the one to be used and display

// Show the next number(s) as in the first step, record and display

// When the user clicks 'equals'
// Run the calculation as displayed
let operator;
let result;
let num1;
let num2;

function add(num1, num2) {
    return num1 + num2;
}



function operate(one, two) {
    one = num1;
    two = num2;
    if (operator === "add") {
        result = add(one, two);
        console.log(result);   
    }
    num1 = result;
    updateDisplay()   
}

function pressNumber(number) {
    if (operator === undefined || result !== undefined) num1 = number;
    else num2 = number;
    updateDisplay()
}

function pressOperator(input) {
    operator = input;
}

const btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", () => {
    pressNumber(1);
});

const btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", () => {
    pressNumber(2);
});

const btn3 = document.querySelector(".btn-3");
btn3.addEventListener("click", () => {
    pressNumber(3);
});

const btn4 = document.querySelector(".btn-4");
btn4.addEventListener("click", () => {
    pressNumber(4);
});

const btn5 = document.querySelector(".btn-5");
btn5.addEventListener("click", () => {
    pressNumber(5);
});

const btn6 = document.querySelector(".btn-6");
btn6.addEventListener("click", () => {
    pressNumber(6);
});

const btn7 = document.querySelector(".btn-7");
btn7.addEventListener("click", () => {
    pressNumber(7);
});

const btn8 = document.querySelector(".btn-8");
btn8.addEventListener("click", () => {
    pressNumber(8);
});

const btn9 = document.querySelector(".btn-9");
btn9.addEventListener("click", () => {
    pressNumber(9);
});

const btn0 = document.querySelector(".btn-0");
btn0.addEventListener("click", () => {
    pressNumber(0);
});

const btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {
    pressOperator("add");
})



const btnEquals = document.querySelector(".btn-equals");
btnEquals.addEventListener("click", () => {
    operate(num1, num2);
});


// Show numbers on display -- TEMP --
const display = document.querySelector(".display");

function updateDisplay() {
display.textContent = `Num1 = ${num1} Num2 = ${num2} Result = ${result}`;
}