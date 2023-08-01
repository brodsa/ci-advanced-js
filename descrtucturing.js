/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {mike, jill, alicia} = jobs;
console.log(mike,jill,alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "czech"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative,johnSecondary);

let[, maryNative,,,marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLang: "english",
    secondLang: "french",
    thirdLang: "spanish",
    forthLang : "german"
};
let {firstLang, thirdLang} = languages2
console.log(firstLang,thirdLang)

// Using Destructuring with rest parameter syntax
let fruits = ["apple", 'orange','banana', "peach"]
let [favourites, secondFavourites, ...others] = fruits
console.log(favourites, secondFavourites, others)

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
}
let {brian, anna, ...rest} = favouriteFoods
console.log(brian, anna, rest) \\ pizza pasta { sarah: 'vegetarian', andrea: 'steak' }
