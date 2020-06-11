//  Your basic array of numbers
var points = [40, 100, 1, 5, 25, 10, 11, 55];

// what is the total of all of the numbers?
let totalPts = 0;
for (let i = 0; i < points.length; i++) {
    totalPts += points[i];
}
console.log('The total of all numbers in the array is: ' + totalPts);

// can we do it in few lines of code?
//                        we need a running total and the nextNum in the array
//                                         add the next number to the total
//                                                           initialize the total   
totalPts = points.reduce((total, nextNum) => total + nextNum, 0);
console.log('The total of all numbers in the array is: ' + totalPts);

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