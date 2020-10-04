const exoplanets = require('./exoplanets.json');

const met = require('./MettalicityInfo.json');
const all = require('./PlanetInfo.json');

// console.log(met.length, all.length);

const parsed = JSON.parse(JSON.stringify(exoplanets));
const noStellar = parsed.data.filter((x) => x.st_met !== 'N/A' || !x.pl_orbper);
console.log(noStellar.length);
