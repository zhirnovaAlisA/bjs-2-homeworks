"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		return arr;
	}
	if (discriminant === 0) {
		arr.push(-b / (2 * a));
		return arr;
	}
	arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
	arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent /= 100;
	percent /= 12;
	let credit_body = amount - contribution;
	let payment = credit_body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let sum = (payment * countMonths).toFixed(2);
	return +sum;
}