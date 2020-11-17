let students = [{ firstName: 'Eric',   lastName: 'Couch',   age: 47, gender: 'M', married: true,  faction: 'Jedi'},
                { firstName: 'Rashad', lastName: 'Davis',   age: 32, gender: 'M', married: false, faction: 'Jedi'},
                { firstName: 'Tigre',  lastName: 'Anthony', age: 38, gender: 'M', married: true,  faction: 'Jedi'}, 
                { firstName: 'Marissa',lastName: 'Sams',    age: 23, gender: 'F', married: false, faction: 'Sith'}, 
                { firstName: 'Joshua', lastName: 'Hilton',  age: 22, gender: 'M', married: false, faction: 'Sith'}, 
                { firstName: 'Gulnar', lastName: 'Thawar',  age: 34, gender: 'F', married: true,  faction: 'Jedi'}, 
                { firstName: 'Omnia',  lastName: 'saeed',   age: 30, gender: 'F', married: true,  faction: 'Sith'}, 
                { firstName: 'Daniel', lastName: 'Perez',   age: 25, gender: 'M', married: false, faction: 'Jedi'}, 
                { firstName: 'Derek',  lastName: 'Bacy',    age: 28, gender: 'M', married: false, faction: 'Sith'}];

let ages, siths, males, maleNames;

//  create a list of just the ages
ages = students.map(s => s.ages);

//  create a list of strings for the male names
males = students.filter(s => s.gender == 'M').map(s => s.firstName);

//  create a JSON list of first and last names of the males
maleNames = students.filter(s => s.gender == 'M').map(s => ({first: s.firstName, last: s.lastName}));
console.table(maleNames)

//  create a list of all first names 
//  create a list names (first and last) for all female Siths
