const convertToCelsius = function (tempInFa) {
	let result = ((tempInFa - 32) * 5) / 9;
	return parseFloat((Math.round(result * 10) / 10).toFixed(1));
};

const convertToFahrenheit = function (tempInCe) {
	let result = (tempInCe * 9) / 5 + 32;
	return parseFloat((Math.round(result * 10) / 10).toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
