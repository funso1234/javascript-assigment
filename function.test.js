const {add, multiply, division, substract, modulo, square} = require("./function.js");

test("add two numbers", () => {

	let numOne = 2;

	let numTwo = 5;

	let ans = add(2, 5)
	expect(ans).toBe(7);
});


test("multiply two numbers", () => {

	let numOne = 2;

	let numTwo = 5;

	let ans = multiply(2, 5)
	expect(ans).toBe(10);
});


test("division two numbers", () => {

	let numOne = 2;

	let numTwo = 5;

	let ans = division(10, 5)
	expect(ans).toBe(2);
});


test("substract two numbers", () => {

	let numOne = 2;

	let numTwo = 5;

	let ans = substract(10, 5)
	expect(ans).toBe(5);
});

test("modulo two numbers", () => {

	let numOne = 2;

	let numTwo = 5;

	let ans = modulo(7, 5)
	expect(ans).toBe(2);
});


test("square two numbers", () => {

	let numOne = 10;

	let numTwo = 2;

	let ans = square(10, 2)
	expect(ans).toBe(100);
});








