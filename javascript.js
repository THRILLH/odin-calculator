let operator;
let result;
let num1 = "";
let num2 = "";

function makeNum1Negative() {
    num1 = "-" + num1;
}

function makeNum1Positive() {
    num1 = num1.substring(1);
}

function makeNum2Negative() {
    num2 = "-" + num2;
}

function makeNum2Positive() {
    num2 = num2.substring(1);
}

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
    if (num2 == 0) {
        num1Display.textContent = "Please don't";
        operatorDisplay.textContent = "";
        num2Display.textContent = "";
    }
    else return num1 / num2;
}

function operate() {
    if (num1 !== "" && num2 !== "") {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") result = add(num1, num2);
    if (operator === "−") result = subtract(num1, num2);
    if (operator === "×") result = multiply(num1, num2);
    if (operator === "÷") result = divide(num1, num2);
    result = Number(result.toFixed(5))
    num1 = result;
    num2 = Number(num2);
    enableButton(btnPoint);
    displayAnswer()  
    } 
}

function pressNumber(number) {
    if (operator === undefined || result !== undefined) {
        if (typeof(num1) == "number") num1 = ""; num2 = "";
        num1 += number;
        operator = undefined;
    }
    else { if (typeof(num2) == "number") num2 = "";
        num2 += number;
    }
    enableButton(btnPlus);
    enableButton(btnMinus);
    enableButton(btnMultiply);
    enableButton(btnDivide);
    updateDisplay()
}

function pressOperator(input) {
    if (result == undefined) operate();
    operator = input;
    num2 = ""
    result = undefined;
    enableButton(btnPoint);
    updateDisplay()
}

function clear() {
    operator = undefined;
    result = undefined;
    num1 = "";
    num2 = "";
    clearDisplay();
    disableButton(btnPlus);
    disableButton(btnMinus);
    disableButton(btnMultiply);
    disableButton(btnDivide);
    enableButton(btnPoint);
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

const btnPoint = document.querySelector(".btn-point");
btnPoint.addEventListener("click", () => {
    pressNumber(".");
    disableButton(btnPoint);
});

const btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {
    pressOperator("+");
})

const btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
    pressOperator("−");
})

const btnMultiply = document.querySelector(".btn-multiply");
btnMultiply.addEventListener("click", () => {
    pressOperator("×");
})

const btnDivide = document.querySelector(".btn-divide");
btnDivide.addEventListener("click", () => {
    pressOperator("÷");
})


const btnEquals = document.querySelector(".btn-equals");
btnEquals.addEventListener("click", () => {
    operate();
});

const btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
    clear();
})

const btnPlusMinus = document.querySelector(".btn-plusminus");
btnPlusMinus.addEventListener("click", () => {
    if (operator === undefined || result !== undefined) {
        if (typeof num1 === "string") {
        if (num1.charAt(0) === "-") makeNum1Positive();
        else makeNum1Negative();
        updateDisplay();
        }
        else num1 = (num1 * -1);
        displayAnswer();
    }
    else { if (num2.charAt(0) === "-") makeNum2Positive();
        else makeNum2Negative();
        updateDisplay();
    }
})

disableButton(btnPlus);
disableButton(btnMinus);
disableButton(btnMultiply);
disableButton(btnDivide);

const display = document.querySelector(".display");
const num1Display = document.querySelector(".num1-display");
const num2Display = document.querySelector(".num2-display");
const operatorDisplay = document.querySelector(".operator-display");


function updateDisplay() {
    if (operator === undefined) num1Display.textContent = num1;
    else {
        num1Display.textContent = num1;
        operatorDisplay.textContent = operator;
        num2Display.textContent = num2;
    }
}

function clearDisplay() {
    num1Display.textContent = "";
    num2Display.textContent = "";
    operatorDisplay.textContent = "";
}

function displayAnswer() {
    num1Display.textContent = num1;
    operatorDisplay.textContent = "";
    num2Display.textContent = "";
}

function disableButton(button) {
    button.disabled = true;
}

function enableButton(button) {
    button.disabled = false;
}