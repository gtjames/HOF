const passengers = require('./titanic.json');
//  clean up the ages. some of them were blank. 
//  Coerce them in to being an integer
passengers.forEach(p => p.Age |= 0)

console.log('number of passengers and crew: ' + passengers.length);

let survivors = passengers.filter(p => p.Survivor == "T");
console.log('number of survivors: ' + survivors.length);

//  average age of the survivors
let age = survivors.reduce((total, p) => total + p.Age,0)
console.log('average age of the survivors' + age/survivors.length);

// 3rd class passengers over 60
//  find the captain 
//      hint FirstName starts with Capt
//      how many captains are there
// how many crew died (PassengerOrCrew == "Crew")
// find the Musicians (Role == 'Musician')

//  get list of women (FirstName starts with Mrs)

//  how many different titles were there? Mr Mrs Miss, mlle, Fr, Dr, Capt....
let titles = new Set( passengers.map(p => p.FirstName.split(" ")[0]));
titles.forEach(t => console.log(t))
