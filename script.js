const fs = require('fs');

const HJ = require('./UnextractedHJ.json');

// Extract Certain Fields from main HJ JSON
function extractFields() {
	const fields = [
		'name',
		'planet_status',
		'mass',
		'mass_error_min',
		'mass_error_max',
		'radius',
		'radius_error_min',
		'radius_error_max',
		'semi_major_axis',
		'semi_major_axis_error_min',
		'semi_major_axis_error_max',
		'orbital_period',
		'orbital_period_error_min',
		'orbital_period_error_max',
		'star_name',
		'star_radius',
		'star_radius_error_min',
		'star_mass',
		'star_mass_error_min',
		'star_metallicity',
		'star_metallicity_error_min',
		'star_metallicity_error_max',
	];

	const slicedHJ = HJ.map((hj) => {
		const obj = {};
		for (let field of fields) {
			console.log(field);
			obj[field] = hj[field];
		}

		return obj;
	});
	console.log(slicedHJ);
	return fs.writeFile('extractFs.json', JSON.stringify(slicedHJ), (err) =>
		console.log(err),
	);
}

// ExtractedV2 (renamed and merged uncertainities)

function ExtractedV2() {
	const extracted = require('./extractFs.json');

	const extractedv2 = extracted.map((pl) => {
		return {
			name: pl.name,
			planet_mass: `${pl.mass}±${pl.mass_error_min}`,
			planet_radius: `${pl.radius}±${pl.radius_error_min}`,
			planet_semi_major_axis: `${pl.semi_major_axis}±${pl.semi_major_axis_error_min}`,
			planet_orbital_period: `${pl.orbital_period}±${pl.orbital_period_error_min}`,
			star_name: pl.star_name,
			star_mass: `${pl.star_mass}±${pl.star_mass_error_min}`,
			stat_radius: `${pl.star_radius}±${pl.star_radius_error_min}`,
			star_metallicity: `${pl.star_metallicity}±${pl.star_metallicity_error_min}`,
		};
	});

	fs.writeFile('Extractv2.json', JSON.stringify(extractedv2), (err) =>
		console.log(err),
	);
}

// Adding Transit Probablity

const extracted2 = require('./Extractv2.json');

function transitProb() {
	const ptr = `0.1240404138
0.08073619601
0.2462364244
0.1884598032
0.049294982
0.1238187638
0.1549087593
0.202269513
0.08592092379
0.1470749978
0.1142912119
0.1574684462
0.1553563604
0.06228847984
0.0947317963
0.1646582289
0.1416422984
0.150399446
0.08359773452
0.05115517
0.1860188
0.1022876094
0.1430765718
0.406916125`;

	let arr_ptr = ptr.split('\n');

	const pl_ptr = [];
	extracted2.forEach((pl, i) => {
		const planetInfo = {
			tr_p: parseFloat(arr_ptr[i]),
			...pl,
		};

		pl_ptr.push(planetInfo);
	});

	fs.writeFile('./transit_prob.json', JSON.stringify(pl_ptr), (err) =>
		console.log(err),
	);
}

// Binning Metallicity

const transit_prob = require('./transit_prob.json');

function binIt() {
	const binned = {
		zero: {
			metalOne: [],
			metalTwo: [],
			metalThree: [],
		},

		three: {
			metalOne: [],
			metalTwo: [],
			metalThree: [],
		},

		six: {
			metalOne: [],
			metalTwo: [],
			metalThree: [],
		},
	};

	const periodBins = {
		zero: [],
		three: [],
		six: [],
	};

	for (let pl of transit_prob) {
		let { planet_orbital_period: orbital_period } = pl;
		orbital_period = parseFloat(orbital_period.split('±')[0]);

		if (orbital_period >= 0 && orbital_period < 3) {
			periodBins['zero'].push(pl);
		} else if (orbital_period >= 3 && orbital_period < 6) {
			periodBins['three'].push(pl);
		} else if (orbital_period >= 6 && orbital_period < 9) {
			periodBins['six'].push(pl);
		}
	}

	for (let bin in periodBins) {
		for (let pl of periodBins[bin]) {
			let { star_metallicity } = pl;
			star_metallicity = parseFloat(star_metallicity.split('±')[0]);

			if (star_metallicity <= 0 && star_metallicity > -0.2) {
				binned[bin]['metalOne'].push(pl);
			} else if (star_metallicity <= 0.2 && star_metallicity > 0) {
				binned[bin]['metalTwo'].push(pl);
			} else if (star_metallicity <= 0.4 && star_metallicity > 0.2) {
				binned[bin]['metalThree'].push(pl);
			}
		}
	}

	fs.writeFile('binned.json', JSON.stringify(binned), (err) =>
		console.log(err),
	);
}

// binIt();

// Finding Frequency of total number of planets with period and metallicity bins

// const binned = require('./binned.json');
const ndet = require('./ndet.json');

// Adding Detected Planets Frequency
function addingDetFreq() {
	for (let per in binned) {
		for (let met in binned[per]) {
			binned[per][met] = {
				planets: binned[per][met],
				frac_planetsDetected_ndet: (parseFloat(ndet[per][met]) / 4335).toFixed(
					5,
				),
			};
		}
	}

	fs.writeFile('binned.json', JSON.stringify(binned), (err) =>
		console.log(err),
	);
}

// addingDetFreq();

// Calculating Frequency of C_i

const binned = require('./binned.json');
function ci() {
	for (let per in binned) {
		for (let met in binned[per]) {
			binned[per][met]['planets'].forEach((pl, i) => {
				const freq = parseFloat(
					1 /
						parseFloat(
							binned[per][met]['frac_planetsDetected_ndet'] * pl['tr_p'],
						),
				);

				binned[per][met]['planets'][i]['c_i'] = freq.toFixed(4);
			});
		}
	}

	fs.writeFile('binned.json', JSON.stringify(binned), (err) =>
		console.log(err),
	);
}

// Calculating Occurence Rates
const bins = require('./binned.json');

function calcOcc() {
	for (let per in bins) {
		for (let met in bins[per]) {
			let tot = 0;
			for (let pl of bins[per][met]['planets']) {
				tot += parseFloat(pl.c_i);
			}

			bins[per][`occ_${met}`] = (
				tot / bins[per][met]['planets'].length
			).toFixed(5);
		}
	}

	fs.writeFile('binned.json', JSON.stringify(binned), (err) =>
		console.log(err),
	);
}

// calcOcc();
