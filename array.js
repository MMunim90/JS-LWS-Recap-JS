// array methods

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

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

const result = fruits.splice(2, 2, "Pineapple", "Jack-Fruit", "Goava");

console.log(result);
console.log(fruits);