const fs = require('fs');
const metallicity = require('./mettalicity.json');
const allData = require('./allData.json');

const res = [];

metallicity.forEach((metallicityInfo) => {
	allData.forEach((allInfo) => {
		if (metallicityInfo.name === allInfo.pl_name) {
			const plConfirm = { ...allInfo, st_met: metallicityInfo.met };
			res.push(plConfirm);
		}
	});
});

const JsonData = JSON.stringify(res);
fs.writeFile('exoplants.json', JsonData, function (err) {
	console.log(err);
});
