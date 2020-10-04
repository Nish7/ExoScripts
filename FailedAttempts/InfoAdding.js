const gasGiants = require('./JSONs/GasGiants.json');
const mettalicity = require('./JSONs/met.json');
const fs = require('fs');

let res = [];

function extractOrbital(desc) {
	// "description": "CoRoT-17 b is a gas giant exoplanet that orbits a G-type star. Its mass is 2.43 Jupiters, it takes 3.8 days to complete one orbit of its star, and is 0.0461 AU from its star. Its discovery was announced in 2011.",
	let ext;

	if (desc.includes('year') || desc.includes('years')) {
		ext = desc.match(/(?<=takes ).*(?= years)/g);
	} else {
		ext = desc.match(/(?<=takes ).*(?= days)/g);
	}

	return ext[0];
}

for (let hj of gasGiants) {
	for (let metalPl of mettalicity) {
		if (hj.title === metalPl.name) {
			const orb = extractOrbital(hj.description);
			res.push({ ...hj, met: metalPl.met, orb });
		}
	}
}

// fs.writeFile('./JSONs/GasGiantsExt.json', JSON.stringify(res), (err) =>
// 	console.log(err),
// );

console.log(res);
