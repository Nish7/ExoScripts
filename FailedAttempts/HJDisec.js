const AllGas = require('./JSONs/GasGiantsExt.json');
const hj = [];
const fs = require('fs');

for (let pl of AllGas) {
	const { pl_massj, orb } = pl;
	if (pl_massj > 0.25 && parseInt(orb) < 10 && pl_massj < 1.25) {
		hj.push(pl);
	}
}

let kep = [];
let check = [
	'Kepler-428 b',
	'Kepler-74 b',
	'Kepler-45 b',
	'Kepler-435 b',
	'Kepler-433 b',
	'Kepler-1658 b',
	'Kepler-75 b',
	'Kepler-40 b',
	'Kepler-44 b',
	'Kepler-41 b',
	'Kepler-43 b',
	'Kepler-12 b',
	'Kepler-8 b',
	'Kepler-7 b',
	'Kepler-6 b',
	'Kepler-5 b',
	'Kepler-447 b',
	'Kepler-91 b',
	'Kepler-412 b',
	'Kepler-32 b',
	'Kepler-32 c',
	'Kepler-17 b',
	'Kepler-15 b',
	'Kepler-77 b',
	'Kepler-76 b',
	'Kepler-24 b',
	'Kepler-28 b',
	'Kepler-28 c',
];

for (let hjs of hj) {
	if (hjs.display_name.includes('Kepler')) kep.push(hjs.title);
}

const not = kep.filter((x) => !check.includes(x));

console.log(kep.length, not);

//   'Kepler-424 b',

// fs.writeFile('./JSONs/Hj.json', JSON.stringify(hj), (err) => console.log(err));
