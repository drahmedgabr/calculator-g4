const resultDiv = document.getElementById("resultDiv");
var equation = "";

function addNumber(number) {
    equation = equation + number;
    resultDiv.innerText = equation;
}

function calculate() {
    const result = eval(equation);
    resultDiv.innerText = result;
    equation = result;
}

function clearScreen() {
    equation = "";
    resultDiv.innerText = 0;
}