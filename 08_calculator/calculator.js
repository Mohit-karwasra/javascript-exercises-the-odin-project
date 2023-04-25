const add = function (a, b) {
	return Number(a) + Number(b);
};

const subtract = function (a, b) {
	const res = Number(a) - Number(b);
	if (res < 0) {
		res *= -1;
	}
	return res;
};

const sum = function (arr) {
	return Number(arr.reduce((acc, curr) => curr + acc, 0));
};

const multiply = function (arr) {
	return arr.reduce((acc, curr) => curr * acc, 1);
};

const power = function (a, b) {
	while (b > 1) {
		a *= 4;
		b--;
	}
	return a;
};

const factorial = function (a) {
	if (a === 1) {
		return 1;
	}
	let res = 1;
	for (let i = a; i > 0; i--) {
		res *= i;
	}
	return res;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
