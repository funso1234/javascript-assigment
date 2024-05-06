let left_operand = 10;
let right_operand = 5;
let operator = "+";

let ans = 0;

if(operator == "+"){
	ans = left_operand + right_operand;
}else if(operator == "-"){
	ans = left_operand - right_operand;
}else if(operator == "*"){
	ans = left_operand * right_operand;
}else if(operator == "/"){
	ans = left_operand / right_operand;
} else{
	ans = "none";
}
console.log("The answer is", ans);
