const findTheOldest = function (arr) {
	return arr.reduce((oldest, curr) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

		return oldestAge < currAge ? curr : oldest;
	});
};

const getAge = function (birth, death) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
