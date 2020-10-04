const zero = require('./zero.json');
const three = require('./three.json');
const six = require('./six.json');

const fs = require('fs');

console.log(zero.length, three.length, six.length);

const binned = {
	zero: {
		metalOne: 0,
		metalTwo: 0,
		metalThree: 0,
	},

	three: {
		metalOne: 0,
		metalTwo: 0,
		metalThree: 0,
	},

	six: {
		metalOne: 0,
		metalTwo: 0,
		metalThree: 0,
	},
};

function counter(arr, arrName) {
	for (let pl of arr) {
		let { star_metallicity } = pl;
		star_metallicity = parseFloat(star_metallicity);

		if (star_metallicity <= 0 && star_metallicity > -0.2) {
			binned[arrName]['metalOne']++;
		} else if (star_metallicity <= 0.2 && star_metallicity > 0) {
			binned[arrName]['metalTwo']++;
		} else if (star_metallicity <= 0.4 && star_metallicity > 0.2) {
			binned[arrName]['metalThree']++;
		}
	}
}

counter(zero, 'zero');
counter(three, 'three');
counter(six, 'six');

fs.writeFile('../ndet.json', JSON.stringify(binned), (err) => console.log(err));
