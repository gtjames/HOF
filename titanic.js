const passengers = require('./titanic.json');
//  clean up the ages. some of them were blank. 
//  Coerce them in to being an integer
passengers.forEach(p => p.age = +p.age)

console.log(`number of passengers and crew: ${passengers.length}`);

let survivors = passengers.filter(p => p.survivor === "T");
console.log('number of survivors: ' + survivors.length);

//  average age of the survivors
let age = survivors.reduce((total, p) => total + p.age,0)
console.log(`average age of the survivors: ${(age/survivors.length).toFixed(1)}`);

// 3rd class passengers over 60
let old3rdClass = passengers.filter(p => p.age > 60 && p.paxClass === '3rd Class');
console.table(old3rdClass)
//  find the captain
//      hint FirstName starts with Capt
let captain = passengers.filter(p => p.firstName.startsWith('Capt'));
console.table(captain);

//      how many captains are there
// how many crew died (PassengerOrCrew === "Crew")
// find the Musicians (Role === 'Musician')

//  get list of married women (FirstName starts with Mrs)
//  how many children under 18 survived (note: unknown ages are marked as 0)

//  List passengers for whom the age is missing)
let youth = passengers.filter(p => !p.age);
console.table(youth)
//

//  how many different titles were there? Mr Mrs Miss, mlle, Fr, Dr, Capt....
let titles = new Set( passengers.map(p => p.firstName.split(" ")[0]));
titles.forEach(t => console.log(t))
