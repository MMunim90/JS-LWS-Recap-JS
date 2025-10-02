// object 

const a = "popularity";
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
};

// language.popularity = "100%";
// language.a = "100%";
language[a] = "100%";
console.log(language);

// console.log(Object.keys(language));
// console.log(Object.values(language));
// console.log(Object.entries(language));