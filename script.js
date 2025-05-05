var resultDiv = document.getElementById("resultDiv");
var equationString = "";

function addNumber(number) {

    var lastCharacter = equationString.slice(-1);
    var operators = ["+", "-", "×", "÷"];

    if (operators.includes(lastCharacter) && operators.includes(number)) {
        deleteNumber();
    }

    equationString = equationString + number;
    resultDiv.innerText = equationString;
}

function calaculateEquation() {
    equationString = equationString.replaceAll("÷", "/");
    equationString = equationString.replaceAll("×", "*");
    var result = eval(equationString);
    resultDiv.innerText = result;
    equationString = result + "";
}

function clearScreen() {
    equationString = "";
    resultDiv.innerText = 0;
}

function deleteNumber() {
    
    equationString = equationString.slice(0, -1);

    if (equationString == "") {
        resultDiv.innerText = 0;
    } else {
        resultDiv.innerText = equationString;
    }
}