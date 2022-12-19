const volcanoes = require('./volcanos.json');

volcanoes.forEach(v => v.Deaths = v.Deaths|0);
console.log(volcanoes.length);

let sinceY2K = volcanoes.filter(v => v.Year > 2000);
console.log("Since 2000 there have been " + sinceY2K.length + " eruptions");

// count the number of volcanoes in the United States
let ar;
ar = volcanoes.filter(v => v.Country == 'United States');
console.log("Make Volcanoes Great again " + ar.length + " eruptions");

ar = volcanoes.filter(v => v.Type == 'Caldera');
console.log("Caldera " + ar.length + " eruptions");

ar = volcanoes.filter(v => v.Elevation >= 2000);
console.log("Above 2000 Elevation " + ar.length + " eruptions");

// get number volcanoes in Japan after 1950
ar = volcanoes.filter(v => v.Country == 'Japan' && v.Year > 1950);
console.log("Japan 1950 " + ar.length + " eruptions");

// get number volcanoes where Death toll is > 200 and after the year 1500
ar = volcanoes.filter(v => v.Deaths > 200 && v.Year > 1500);
console.log("Many Deaths after 1500 " + ar.length + " eruptions");

let deaths = volcanoes.filter(v => v.Country == 'Japan').reduce((total, v) => total + v.Deaths, 0);
console.log(" Total number of deaths: " + deaths)