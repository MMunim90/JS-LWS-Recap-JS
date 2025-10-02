//  spread operator

// const fruits = ["Banana", "Orange"];
// const language = {
//     name: "JavaScript",
//     year: 1995,
//     creator: "Brendan Eich",
// };

// const result = [...fruits];
// result.push("Pineapple");

// console.log(result);
// console.log(fruits);


// const person = [
//     {
//         name: "Munim",
//     },
//     {
//         name: "Nibir",
//     }
// ];

// const result = {
//     ...language,
// };

// console.log(result);


// rest operator
// function sum(...rest){
//     return rest.reduce((sum, cur) => sum + cur, 0)
// }

// console.log(sum(5, 6, 8, 9, 3));


function sum(text, ...rest){
    const result = rest.reduce((sum, cur) => sum + cur, 0);
    console.log(`${text} ${result}`);
}

sum("The sum is: ", 1, 4, 6, 9, 6, 2)