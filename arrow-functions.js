/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumber(a, b){
//     // code block
//     return a + b;
// }
// let sum = addTwoNumber(3,5)
// console.log(sum)


// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     // code block
//     return a + b;
// }
// let sum = addTwoNumbers(3,5)
// console.log(sum)

// Single Line Arrow Function With Parameters
// const addTwoNumber = (a, b) => a + b;
// const addTwoNumber = (a, b) => (a + b);
// let sum = addTwoNumber(3,5)
// console.log(sum)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('hello there');

const sayHello = () => console.log('Hello')

// Returning Multiple Lines
const returnMultipleLines = () => {
    `<p>
     This is a multiple line string
    </p> 
    `
}
console.log(returnMultipleLines)

