var resultDiv = document.getElementById("resultDiv");
var equationString = "";

function addNumber(number) {
    equationString = equationString + number;
    resultDiv.innerText = equationString;
}

function calaculateEquation() {
    var result = eval(equationString);
    resultDiv.innerText = result;
    equationString = "";
}

function clearScreen() {
    equationString = "";
    resultDiv.innerText = 0;
}