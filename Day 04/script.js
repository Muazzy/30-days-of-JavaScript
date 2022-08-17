// alert("im in");

// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

// const myAge = 22;
// let age = prompt("What is your age");
// ///////////////////////// 1. ///////////////////
// // if (age >= 18) {
// //     console.log('You are old enough to drive.');
// // }
// // else {
// //     console.log(`You are left with ${18 - age} years to drive.`);
// // }

// if (age == myAge) {
//     console.log("we are the same age!");
// }
// else if (age > myAge) {
//     console.log(`You are ${age - myAge} years older than me`);
// }
// else {
//     console.log(`I'm ${myAge - age} years older than you`)
// }

// let a = 4;
// let b = 3;

// if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// }
// else {
//     console.log(`${a} is less than ${b}`);
// }

// console.log("With Ternary conditoinals\n");

// a > b ? console.log(`${a} is greater than ${b}`) :
//     console.log(`${a} is less than ${b}`)

// let num = prompt("Enter a number");

// num % 2 == 0 ? console.log(`${num} is a even number`) :
//     console.log(`${num} is an odd number`)




// let yoGrade = getyoGrade(score);
// console.log(yoGrade);

// if you want pass any value in switch statement and then apply condition on that passing value and evaluate statement then you have to write switch statement under an function and pass parameter in that function and then pass true in switch expression like the below example.

// this is a terrible approach for using switchs , use 

// The only thing necessary is switch(true){...} and for your case expressions to evaluate to booleans.

// It works because, the value we give to the switch is used as the basis to compare against. Consequently, the case expressions, also evaluating to booleans will determine which case is run. Could also turn this around, and pass switch(false){..} and have the desired expressions evaluate to false instead of true.. but personally prefer dealing with conditions that evaluate to truthyness. However, it does work too, so worth keeping in mind to understand what it is doing.

// Eg: if liCount is 3, the first comparison is true === (liCount == 0), meaning the first case is false. The switch then moves on to the next case true === (liCount<=5 && liCount>0). This expression evaluates to true, meaning this case is run, and terminates at the break. I've added parentheses here to make it clearer, but they are optional, depending on the complexity of your expression.

// It's pretty simple, and a neat way (if it fits with what you are trying to do) of handling a long series of conditions, where perhaps a long series of ìf() ... else if() ... else if () ... might introduce a lot of visual noise or fragility.

// Use with caution, because it is a non-standard pattern, despite being valid code.

// function getyoGrade(score) {

//     let grade = '';
//     // Notice that we don't pass score to the switch but true. The value we give to the switch is used as the basis to compare against.
//     switch (true) //we can also put false here //we give here value of 'true' (boolean) cuz the cases below also also gives or evaluates booleans ie true or false
// {
//         case score >= 0 && score < 50: grade = 'F'
//             break
//         case score < 60 && score >= 50: grade = 'D'
//             break
//         case score < 70 && score >= 60: grade = 'C'
//             break
//         case score < 80 && score >= 70: grade = 'B'
//             break
//         case score >= 80: grade = 'A'
//             break
//         default: grade = ''
//     }
//     return grade;
// }

// let score = prompt("Tell yo numbers");
// score = parseInt(score);

