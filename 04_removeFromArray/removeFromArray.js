const removeFromArray = function (arr, ...elements) {
	// for (let i = 0; i < elements.length; i++) {
	// 	const index = arr.indexOf(elements[i]);
	// 	if (index > -1) {
	// 		arr.splice(index, 1);
	// 	}
	// }
	// return arr;

	return arr.filter((val) => !elements.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
