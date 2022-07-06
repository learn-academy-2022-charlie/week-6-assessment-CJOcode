// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


// a) Create a test with an expect statement using the variable provided.

describe ("persons", () => {
  
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ]
 

    expect(persons(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



  })
})

//  GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// persons
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// ● persons › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: persons is not defined


// b) Create the function that makes the test pass.
//Pseudo:
// Create a function called persons that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// Iterate through the array using HOF map, targeting the values for the param.
// Create a variable that split the value using .name to specifically split the first and last name into an array.
// Using string incantation return that variable capitalizing the first index of the first name using .toUpperCase adding the substring of the rest of the first name. Next, add a quoted space, then, the last name capitalizing the first index of the second index in the split name array plus substring(1) of the 1 index of the split name array. Lastly, add " is ", plus the values of the occupations, plus a "."

const persons = (array) => {
    
  return array.map(value => {
      let arr1 = value.name.split(" ")
      return arr1[0][0].toUpperCase() + arr1[0].substring(1) + " " +
        arr1[1][0].toUpperCase() + arr1[1].substring(1) + " is " + value.occupation +"."
  })
}
//  code passed:
// PASS  ./code-challenges.test.js
// persons
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (239 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("remainders3", () => {
  
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(remainders3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders3(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})



// GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// remainders3
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (9 ms)

// ● remainders3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: remainders3 is not defined



// b) Create the function that makes the test pass.

//Pseudo
// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// Inside the function create a variable equal to an empty array
// Create a for loop that will iterate through the giving array 
  // In the loop create a conditional statement that checks to see if the value at the index in equal to a number using the typeOf method. If true, push the modulo of three of that value into the empty array.
// return the empty array which should now be full of the correct numbers. 

const remainders3 = (array) => {
  let final = [];
  for(let i=0;i<array.length;i++) {
    if(typeof array[i] === "number"){
      final.push(array[i] % 3)
    }
  }
return final
}

// CODE PASSES:
// PASS  ./code-challenges.test.js
// remainders3
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (90 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("cubed", () => {
  
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)

  })
})
// GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// cubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed. (12 ms)

// ● cubed › takes in an array of numbers and returns the sum of all the numbers cubed.

//   ReferenceError: cubed is not defined


// b) Create the function that makes the test pass.

//Pseudo
// Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// Create a variable equal to zero
// Create a for loop that will iterate through the array 
  //Inside the loop create a variable that cubes the current index by setting it equal to math.pow given the arguments of the current index and three.
  // Have the variable which was set to zero, set equal to itself, plus the variable that is equal to the index cubed. return that final number as the output.
   
const cubed = (array) => {
  let final = 0;
 
  for(let i=0;i<array.length;i++) {
    
    let cubed = Math.pow(array[i], 3);
    final = final + cubed
  }
return final
  
}

// CODE PASSED:
// PASS  ./code-challenges.test.js
// cubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (4 ms)