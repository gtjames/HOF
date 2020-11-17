let students = [{ firstName: 'Eric',   lastName: 'Couch',   age: 47, gender: 'M', married: true,  faction: 'Jedi'},
                { firstName: 'Rashad', lastName: 'Davis',   age: 32, gender: 'M', married: false, faction: 'Jedi'},
                { firstName: 'Tigre',  lastName: 'Anthony', age: 38, gender: 'M', married: true,  faction: 'Jedi'}, 
                { firstName: 'Marissa',lastName: 'Sams',    age: 23, gender: 'F', married: false, faction: 'Sith'}, 
                { firstName: 'Joshua', lastName: 'Hilton',  age: 22, gender: 'M', married: false, faction: 'Sith'}, 
                { firstName: 'Gulnar', lastName: 'Thawar',  age: 34, gender: 'F', married: true,  faction: 'Jedi'}, 
                { firstName: 'Omnia',  lastName: 'saeed',   age: 30, gender: 'F', married: true,  faction: 'Sith'}, 
                { firstName: 'Daniel', lastName: 'Perez',   age: 25, gender: 'M', married: false, faction: 'Jedi'}, 
                { firstName: 'Derek',  lastName: 'Bacy',    age: 28, gender: 'M', married: false, faction: 'Sith'}];

let jedis, marriedJedis, youngSiths;

jedis = students.filter(student => student.faction == 'Jedi');
marriedJedis = students.filter(student => student.faction == 'Jedi' && students.married);

marriedJedis = students.filter(s => s.faction == 'Jedi').filter(s => s.faction == 'Jedi' && s.married);

youngSiths = students.filter(s => s.age < 30);

//  get the old Jedis (age > 30)
//  get the Jedis with a first name 4 characters
//  get all females
//  get all female, married
//  get all female, married and 
