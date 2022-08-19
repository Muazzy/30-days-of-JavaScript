//Loops

// In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.

// 1. for loop
// For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
//   }

// 

// 2. while loop
// let i = 0
// while (i <= 5) {
//     console.log(i)
//     i++
// }

// 0 1 2 3 4 5

// 3. do while loop
// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// // 0 1 2 3 4 5


// 4. for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//     // code goes here
//   }

// for (const arrElement of arr) {
//     console.log(arrElement); //prints out all the element of the array
// }

//finding sum of all the elements of an array with for of loop
// let sum = 0;
// for (const num of numbersArr) {
//     sum += num; //sum = sum + num 
// }


//For interupting or breaking a loop
// break 
// Break is used to interrupt a loop.

// for(let i = 0; i <= 5; i++){
//     if(i == 3){
//       break
//     }
//     console.log(i)
//   }
  
//   // 0 1 2
// The above code stops if 3 found in the iteration process.

// To skip a certain iteration in a loop
// continue
// We use the keyword continue to skip a certain iterations.
// for(let i = 0; i <= 5; i++){
//     if(i == 3){
//       continue
//     }
//     console.log(i)
//   }
  
//   // 0 1 2 4 5



