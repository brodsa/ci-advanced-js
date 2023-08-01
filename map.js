  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let numbers = [1, 2, 3, 4, 5]
let result = []
for(let num of numbers){
    result.push(num * 2);
}
console.log(result)

// Using map()
const multiByTwo = function(num){
    return num * 2
}
const mapResults = numbers.map(multiByTwo);


// Simplified w/ map()
numbers.map(function(num) {return num * 2})

// Simplfied w/ map() + arrow function
numbers.map(num => num * 2);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
let res1 = students.map(student => [student.name,student.id]);
console.log(res1);

let res2 = students.map(student => [{id: student.id, name: student.name}]);
console.log(res2);

let ages = [23, 56, 47]
let res3 = students.map((student,i) => [{...student,'age':ages[i]}]  );
console.log(res3);