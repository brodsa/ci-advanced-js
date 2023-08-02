  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [1,2,3,4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "accumulator", acc,
        "current", curr,
        "total", acc + curr
    );
    return acc + curr;
}, 0);
console.log(sum)
let sum1 = nums.reduce((acc, curr) => acc + curr,0);


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  let totalYrsExperience = teamMembers.reduce((acc, curr) => (acc + curr.yrsExperience),0);
  console.log(totalYrsExperience);
  
  // Grouping by a property, and totaling it too
  let experienceByProfession = teamMembers.reduce((acc,curr) => {
    let key = curr.profession;
    if (!acc[key]){
      acc[key] = curr.yrsExperience;
    } else {
      acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {})

  console.log(experienceByProfession);