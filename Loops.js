let nums = [0,1,3,5,16,7,9,8,11,64,13,15];

// let i = 20;
// while (i<nums.length) {
//     console.log("even numbers");
//     if (nums[i]%2 == 0) {
//         console.log(nums[i]);
//     }
//     i++;
// }

// i = 20;
// do {
//     console.log("odd numbers");
//     if(nums[i]%2 != 0) {
//         console.log(nums[i]);
//     }
//     i++;
// } while (1==2)

for (let j=0; j<10; j+=2) {
    if (j == 2) {
        continue;
    }
    console.log(j);
    if (j==6) {
        break;
    }
}