const fs = require('fs');
var res = [];

for (let i = 0; i < 12; i++) {
	const data = fs.readFileSync(`./${i}.json`, { encoding: 'utf-8' });
	const buf = JSON.parse(data);
	res.push(buf);
}

fs.writeFile('GasGiants.json', JSON.stringify(res.flat()), (err) =>
	console.log(err),
);
