// optional chaining

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

console.log(user?.education?.school?.name);