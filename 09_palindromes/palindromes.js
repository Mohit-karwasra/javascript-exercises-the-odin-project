const palindromes = function (str) {
	let replacedStr = str.toLowerCase().replace(/[^a-z]/g, "");
	return replacedStr.split("").reverse().join("") == replacedStr;
};

// Do not edit below this line
module.exports = palindromes;
