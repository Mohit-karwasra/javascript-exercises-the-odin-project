const repeatString = function (str, num) {
	if (num < 0) return "ERROR";

	let resultant = "";
	for (let i = 1; i <= num; i++) {
		resultant += str;
	}
	return resultant;
};

// Do not edit below this line
module.exports = repeatString;
