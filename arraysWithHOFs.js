//  Your basic array of numbers
var points = [40, 100, 1, 5, 25, -5, 10, 11, 55, 3, 65, -1, 16, 73, -87];

// what is the total of all of the numbers?
let totalPts = 0;
for (let i = 0; i < points.length; i++) {
    totalPts += points[i];
}
console.log('Version 1  total of all numbers in the array is: ' + totalPts);

//  or do it using the for each loop
totalPts = 0;
for (let score of points) {
    totalPts += score;
}
console.log('Version 2  total of all numbers in the array is: ' + totalPts);

// can we do it in few lines of code?
//                      (total, nextNum)                            we need a running total and the nextNum in the array
//                                          total + nextNum         add the next number to the total
//                                                            0     initialize the total   
totalPts = points.reduce((total, nextNum) => total + nextNum, 0);
console.log('Version 3  total of all numbers in the array is: ' + totalPts);

//  now find the odd elements in the array
let oddPts = [];
for (let i = 0; i < points.length; i++) {
    if (points[i] % 2 === 1) {
        oddPts.push(points[i]);
    }
}
console.log(oddPts);

//  can we find the odd numbers with few lines of code
oddPts = points.filter(pts => pts % 2 === 1);
console.log(oddPts);

//  using filter find all numbers > 50
//  using filter find all negative numbers
//  using filter find all numbers greater than -10 and less than 10