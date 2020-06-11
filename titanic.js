const passengers = require('./titanic.json');
console.log('numbero passengers and crew: ' + passengers.length);

let survivors = passengers.filter(p => p.Survivor == "T");
console.log('number of survivors: ' + survivors.length);

//  clean up the ages. some of them were blank. 
//  Coerce them in to being an integer
passengers.forEach(p => p.Age |= 0)

//  average age of the survivors
let age = survivors.reduce((total, p) => total + p.Age,0)
console.log('average age of the survivors' + age/survivors.length);

// 3rd class passengers over 60
let thirdClass = passengers.filter(p => p.Age > 60 && p.Class == "3rd Class").length;
console.log('there are ' + thirdClass.length + ' third class passengers');

//  find the captain 
//      hint FirstName starts with Capt
let captains = passengers.filter(p => p.FirstName.startsWith('Capt'));
//      how many captains are there
captains =  captains.map( p  => ({FirstName: p.FirstName, 
    LastName: p.LastName, 
    Age: p.Age,
PassengerOrCrew: p.PassengerOrCrew}))
console.table(captains);

// how many crew died
let crew = passengers.filter(p => p.Survivor == "F" && p.PassengerOrCrew == "Crew");
console.table('there were ' + crew.length + ' deaths in the crew');

// find the Musicians
let players = passengers.filter(p => p.Role == 'Musician');
let musicians =  players.map( p  => ({FirstName: p.FirstName, 
                                      LastName: p.LastName, 
                                      Age: p.Age}))
console.table(musicians);

//  get list of women
let ladies = passengers.filter(p => p.FirstName.startsWith("Mrs"));
console.table('there were ' + ladies.length + ' married women on the Titanic' )

//  how many different titles were there? Mr Mrs Miss, mlle, Fr, Dr, Capt....
let titles = new Set( passengers.map(p => p.FirstName.split(" ")[0]));
titles.forEach(t => console.log(t))