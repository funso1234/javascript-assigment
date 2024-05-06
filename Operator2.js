const prompt = require("prompt-sync")();
let operator = prompt("enter operator: ");
let right_operand = 5;
let left_operand = 3;
if(operator == "+"){
	console.log(right_operand + left_operand);
}
else if(operator == "*"){
	console.log(right_operand * left_operand);
}
else if(operator == "/"){
	console.log(right_operand / left_operand);

}
else{
	console.log("error");
}