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


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Iterate 0 to 10 using for loop, do the same using while and do while loop

// Iterate 10 to 0 using for loop, do the same using while and do while loop

// Iterate 0 to n using for loop


// for (let i = 0; i <= 10; i++) {
//     console.log('for loop ' + i);
// }

// let i = 0;
// while (i <= 10) {
//     console.log('while loop ' + i);
//     i++;
// }

// let x = 0;
// do {
//     console.log('do while loop ' + x)
//     x++
// } while (x <= 10);


// You can use only expressions inside of a conditional (ternary) operator ?:. A for statement is not an expression. //THAT IS WHY THIS IS NOT WORKING
// function itterateTillN(n, isIncrement) {
//     if (n === 0) {
//         console.log('loop aint applicable')
//     }
//     else if (isIncrement) {
//         for (let i = 0; i <= n; i++) {
//             console.log(i)
//         }
//     }
//     else {
//         for (let j = n; j >= 0; j--) {
//             console.log(j)
//         }
//     }
// }

// itterateTillN(1, false);

// let hash = '#';

// for (let i = 1; i <= 7; i++) {
//     console.log(hash.repeat(i));
// }

// for (let a = 0; a <= 10; a++) {
//     console.log(`${a} x ${a} = ${a * a}`)
// }

// for (let a = 0; a <= 10; a++) {
//     console.log(`${a}  ${a ** 2}  ${a ** 3}`)
// }

//printing even numbers
// for (let e = 0; e <= 100; e++) {
//     if (e % 2 === 0) {
//         console.log(e);
//     }
// }

// //printing odd numbers
// for (let e = 0; e <= 100; e++) {
//     if (e % 2 !== 0) {
//         console.log(e);
//     }
// }

// for (let p = 0; p <= 100; p++) {
//     if (p < 2) {
//         continue
//     }

//     let Isdivisible = false; //to check if the number 'p' is divisible by anyother number other than it self

//     //looping from 2 thru the number p-1 (one less number than p)
//     for (let i = 2; i < p; i++) {
//         //checking if the p is totally divisible by another number other than itself
//         if (p % i === 0) {
//             //if it is divisble then setting it to true
//             Isdivisible = true;
//             //breaking the loop cuz we now know it wont be a prime number cuz it got divided by another number that was not itself
//             break;
//         }
//     }
//     //if the number did not get divide by another number then printing it out cuz its  a prime number.
//     if (!Isdivisible) {
//         console.log(p);
//     }
// }

// sum of all numbers 0 - 100

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

// let evenSum = 0;
// let oddSum = 0;

// for (i = 0; i <= 100; i++) {
//     i % 2 === 0 ? evenSum += i : oddSum += i
// }

// console.log(`The sum of all evens from 0 to 100 is ${evenSum}`)
// console.log(`The sum of all odds from 0 to 100 is ${oddSum}`)

// console.log([evenSum, oddSum])




// random = Math.floor(random);
// console.log(random * 10)


// Develop a small script which generate array of 5 random numbers
// let arr = []
// for (let i = 0; i <= 5; i++) {

//     let randomNumGenerator = Math.random();

//     let rand = Math.floor((randomNumGenerator * 100)) + 1; //+1 so its not 0 & so its from 1-n  (n=10)
//     arr.push(rand)

// }
// console.log(arr)


// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let arr = [];
for (let i = 0; i < 5; i++) {

    let randomNumGenerator = Math.random();
    let rand = Math.floor(randomNumGenerator * 100) + 1; //+1 so its not 0 & so its from 1-n  (n=10)
    let isUnique = false;


    do {
        if (arr.indexOf(rand) === -1) {
            arr.push(rand)
            isUnique = true;
            break
        }
        rand = Math.floor(Math.random() * 100) + 1;
    }
    while (!isUnique)
}
console.log(arr)

let a = 97;
let z = 122;

let A = 65;
let Z = 90;

let smallABC = []
let bigABC = []
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = a; i <= z; i++) {

    let alphabet = String.fromCharCode(i);
    smallABC.push(alphabet);


}

for (let i = A; i <= Z; i++) {

    let alphabet = String.fromCharCode(i);
    bigABC.push(alphabet);


}


function randomIDGenerator(n) {
    let randomId = '';
    let characters = smallABC.concat(bigABC);
    characters = characters.concat(nums).toString();
    characters = characters.replaceAll(',', ''); //removing commas
    console.log(characters);
    for (let i = 0; i < n; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}

console.log(randomIDGenerator(3))

let turnitinSentence = [];

for (let i = 0; i < 30; i++) {
    // let randomNoOfCharacters = Math.floor(Math.random() * 10) + 1;
    turnitinSentence.push(randomIDGenerator(6));
}

console.log(turnitinSentence);


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruits = ['banana', 'orange', 'mango', 'lemon']
let fruitsReversed = []

for (let i = fruits.length - 1; i >= 0; i--) {
    fruitsReversed.push(fruits[i])
}
console.log(`${fruits} are reversed now ${fruitsReversed}`)