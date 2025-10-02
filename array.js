// array methods

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Apple"];

// find
// const result = fruits.find((f) => f === "Orange" || f === "Mango" );

// findIndex
// const result = fruits.findIndex((f) => f === "Mango" );

//filter
// const result = fruits.filter((f) => f === "Orange" || f === "Mango" );\

//slice
// const result = fruits.slice(start_index, end_index);
// const result = fruits.slice(1, 3);


// splice
// const result = fruits.splice(index, noOfRemovedItems);

// const result = fruits.splice(2, 2, "Pineapple", "Jack-Fruit", "Goava");


//concat
// const result = fruits.concat(["fruit 1", "fruit 2"]);

//push
// const result = fruits.push("fruit 1");

//map
// const result = fruits.map((f) => {
//     if(f === "Apple"){
//         return "Apple";
//     }
//     else{
//         return "N/A";
//     }
// });

// const result = fruits.map((f) => f === "Apple" ? "Apple" : "N/A");

// const result = fruits.map((f) => `${f} -`)

// const res = [];
// for(let i = 0; i <= fruits.length; i++){
//     if(fruits[i] === "Apple"){
//         res.push("Apple")
//     }
//     else{
//         res.push("N/A")
//     }
// }

// console.log(result);
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5];
// const name = "Munim";

// reduce
// const result = numbers.reduce((total, currValue) => total + currValue, 0);

// for of
// for(c of name){
//     console.log(c);
// }

// console.log(result);


// for in
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
};

for (key in language){
    // console.log(key)
    console.log(language[key]);
}