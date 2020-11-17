let ages = [47, 32, 38, 23, 28];
//  take all the numbers in the array and create a string
//      with the numbers separated with a dash
let x = ages.join("-");
console.log('all the numbers joined with a dash between\n\t' + x);

// get the total of all ages using a HOF
totalAges = ages.reduce((total, age) => total + age);
console.log('total ages: ' + totalAges);

let students = [{ firstName: 'Eric',   lastName: 'Couch',   age: 47, gender: 'M', married: true,  faction: 'Jedi'},
                { firstName: 'Rashad', lastName: 'Davis',   age: 32, gender: 'M', married: false, faction: 'Jedi'},
                { firstName: 'Tigre',  lastName: 'Anthony', age: 38, gender: 'M', married: true,  faction: 'Jedi'}, 
                { firstName: 'Marissa',lastName: 'Sams',    age: 23, gender: 'F', married: false, faction: 'Sith'}, 
                { firstName: 'Joshua', lastName: 'Hilton',  age: 22, gender: 'M', married: false, faction: 'Sith'}, 
                { firstName: 'Gulnar', lastName: 'Thawar',  age: 34, gender: 'F', married: true,  faction: 'Jedi'}, 
                { firstName: 'Omnia',  lastName: 'saeed',   age: 30, gender: 'F', married: true,  faction: 'Sith'}, 
                { firstName: 'Daniel', lastName: 'Perez',   age: 25, gender: 'M', married: false, faction: 'Jedi'}, 
                { firstName: 'Derek',  lastName: 'Bacy',    age: 28, gender: 'M', married: false, faction: 'Sith'}];

//  create an array of just the student's age
let m = students.map(s => s.age);
console.log(`just the ages: ${m}`);

let under30 = students.find(s => s.age < 30);
console.log('first student under 30: ');
console.table(under30);

//  want some more HOFs to experiment with
//      some every
//      reverse
//      map from

//  get the total of all the ages
let totalAges, ageArray;

//  get just an array of ages first then compute the total age
ageArray = students.map(s => s.age);                        //  just get the ages into an array
totalAges = ageArray.reduce((total, age) => total + age)    //  total ages in the age array
console.log('Version 1 total ages: ' + totalAges);

totalAges = students.map(s => s.age).reduce((total, age) => total + age)   //  do it all in a single line
console.log('Version 2 total ages: ' + totalAges);

// get the total of all ages using an inline anonymous function
totalAges = ages.reduce(function(total, age) {
    return total + age;
})
console.log('Version 3 total ages: ' + totalAges);

totalAges = students.reduce((total, student) => total + student.age, 0)    //  do it all in a single line
console.log('Version 4 total ages: ' + totalAges);
