var equation = "12+5+6+8-5/0*7+-/";
const operators = ["+", "-", "/", "*"];

var lastCharacter = equation.slice(-1);

var result = operators.includes(lastCharacter);

console.log(result);

