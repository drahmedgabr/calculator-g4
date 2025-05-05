var equationString = "13+24+15+16+18+25-9*";

var operators = ["+", "-", "*", "/"];

var lastCharacter = equationString.slice(-1);

if (operators.includes(lastCharacter)) {
    console.log("yes");
    
} else {
    console.log("no");
    
}
