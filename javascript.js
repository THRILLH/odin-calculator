// Hitting 'equals' after doing a calculation and typing
// a new number does the previous calculation on the new number.
// In reality, nothing should happen.
let operator;
let result;
let num1 = "";
let num2 = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    // Divide by zero stop -- Needs more
    if (num2 == 0) return console.log("Don't do that");
    else return num1 / num2;
}



function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "add") result = add(num1, num2);
    if (operator === "subtract") result = subtract(num1, num2);
    if (operator === "multiply") result = multiply(num1, num2);
    if (operator === "divide") result = divide(num1, num2);
    num1 = result;
    num2 = Number(num2);
    updateDisplay()   
}

function pressNumber(number) {
    if (operator === undefined || result !== undefined) {
        if (typeof(num1) == "number") num1 = "";
        num1 += number;
    }
    else { if (typeof(num2) == "number") num2 = "";
        num2 += number;
    }
    updateDisplay()
}

function pressOperator(input) {
    operator = input;
    result = undefined;
    updateDisplay()
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

const btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
    pressOperator("subtract");
})

const btnMultiply = document.querySelector(".btn-multiply");
btnMultiply.addEventListener("click", () => {
    pressOperator("multiply");
})

const btnDivide = document.querySelector(".btn-divide");
btnDivide.addEventListener("click", () => {
    pressOperator("divide");
})


const btnEquals = document.querySelector(".btn-equals");
btnEquals.addEventListener("click", () => {
    operate();
});


// Show numbers on display -- TEMP --
const display = document.querySelector(".display");

function updateDisplay() {
display.textContent = `Num1 = ${num1} Num2 = ${num2} Result = ${result} Operator = ${operator}`;
}