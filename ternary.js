// ternary operator

// without using ternary operator

// const a = 6;
// let result;

// if(a % 2 === 0){
//     result = "Even";
// }
// else {
//     result = "Odd";
// }

// console.log(result);

// using ternary operator

// const a = 6;

// const result = a % 2 === 0 ? "Even" : "Odd"

// console.log(result);

// two layer ternary operator

const a = 6;
const result = a % 2 === 0 ? "Even" : a % 3 === 0 ? "Divisible by 3" : "Simple Odd";

console.log(result);