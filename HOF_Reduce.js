let ages = [47, 32, 38, 23, 28];
//  take all the numbers in the array and create a string
//      with the numbers separated with a dash
let x = ages.join("-");
console.log('all the numbers joined with a dash between\n\t' + x);

let students = [{ firstName: 'Eric', lastName: 'Couch', age: 47, gender: 'M', married: true, faction: 'Jedi'},
                { firstName: 'Rashad', lastName: 'Davis', age: 32, gender: 'M', married: false, faction: 'Jedi'},
                { firstName: 'Tigre', lastName: 'Anthony', age: 38, gender: 'M', married: true, faction: 'Jedi'}, 
                { firstName: 'Marissa', lastName: 'Sams', age: 23, gender: 'F', married: false, faction: 'Sith'}, 
                { firstName: 'Maurice', lastName: 'Rodriguez', age: 28, gender: 'M', married: false, faction: 'Sith'}];
//  create an array of just the student's age
let m = students.map(s => s.age);
console.log('just the ages: '+m);

let under30 = students.find(s => s.age < 30);
console.log('first student under 30: ');
console.table(under30);

//  wants some more HOFs to experiment with
//      some every
//      reverse
//      map from

//  get the total of all the ages
let totalAges;

//  get just an array of ages first then compute the total age
totalAges = students.map(s => s.age).reduce((total, age) => total + age)
console.log('Version 1 total ages: ' + totalAges);

// get the total of all ages using an inline anonymous function
totalAges = ages.reduce(function(total, age) {
    return total + age;
})
console.log('Version 2 total ages: ' + totalAges);

// get the total of all ages using lambda
totalAges = ages.reduce((total, age) => total + age);
console.log('Version 3 total ages: ' + totalAges);
