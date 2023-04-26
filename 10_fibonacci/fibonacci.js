const fibonacci = function (num) {
	num = Number(num);
	if (num < 0) {
		return "OOPS";
	}
	if (num === 1 || num === 2) {
		return 1;
	}
	let a = 1;
	let b = 1;
	for (let i = 3; i <= num; i++) {
		let temp = b;
		b = b + a;
		a = temp;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
