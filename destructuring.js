// destructuring

const user = {
    id: 339,
    name: "Munim",
    age: 24,
    education: {
        degree: "UnderGrade",
        school: {
            name: "Bhandaria vihari pilot",
        },
    },
};

// const {name, age} = user;
// console.log(name, age);
const {education: {school: name} = {}} = user;
console.log(name)