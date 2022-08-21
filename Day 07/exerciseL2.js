
// ### Exercises: Level 2

// 1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
// 1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

//     ```js
//     console.log(solveQuadratic()) // {0}
//     console.log(solveQuadratic(1, 4, 4)) // {-2}
//     console.log(solveQuadratic(1, -1, -2)) // {2, -1}
//     console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
//     console.log(solveQuadratic(1, 0, -4)) //{2, -2}
//     console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//     ```

// 1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
// 1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

//     ```sh
//     showDateTime()
//     08/01/2020 04:08
//     ```

// 1. Declare a function name _swapValues_. This function swaps value of x to y.

//     ```js
//     swapValues(3, 4) // x => 4, y=>3
//     swapValues(4, 5) // x = 5, y = 4
//     ```

// 1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

//     ```js
//     console.log(reverseArray([1, 2, 3, 4, 5]))
//     //[5, 4, 3, 2, 1]
//     console.log(reverseArray(['A', 'B', 'C']))
//     //['C', 'B', 'A']
//     ```

// 1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
// 1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
// 1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
// 1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
// 1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
// 1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
// 1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

//     ```sh
//     evensAndOdds(100);
//     The number of odds are 50.
//     The number of evens are 51.
//     ```

// 1. Write a function which takes any number of arguments and return the sum of the arguments

//     ```js
//     sum(1, 2, 3) // -> 6
//     sum(1, 2, 3, 4) // -> 10
//     ```

// 1. Writ a function which generates a _randomUserIp_.
// 1. Write a function which generates a _randomMacAddress_
// 1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

//     ```sh
//     console.log(randomHexaNumberGenerator());
//     '#ee33df'
//     ```

// 1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

//     ```sh
//     console.log(userIdGenerator());
//     41XTDbE
//     ```

// const solveLinEquation = (a, x, b, y, c) => (a * x) + (b * y) + c;
// // a=2, x=1, b=3, y=4, c=1
// console.log(solveLinEquation(2, 1, 3, 4, 1)) //15

// function _solveQuadEquation_(a, b, c) {
//     let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
//     let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

//     return x1 === x2 ? [x1] : [x1, x2];

// }
// //Note: a must not be a != 0 
// console.log(_solveQuadEquation_(1, 4, 4))  // [-2]
// console.log(_solveQuadEquation_(1, -1, -2)) //[2, -1]
// console.log(_solveQuadEquation_(1, 7, 12)) //[-3, -4]
// console.log(_solveQuadEquation_(1, 0, -4)) //[2,-2]
// console.log(_solveQuadEquation_(1, -1, 0)) //[1,0]


// // 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(...arr) {
//     console.log(typeof (arr))
//     arr.forEach(element => {
//         console.log(element)
//     });
// }
// const nums = [1, 24, 5, 5, 5, 3, 3, 7, 8, 9, 4];
// printArray(nums) //Array(11) [ 1, 24, 5, 5, 5, 3, 3, 7, 8, 9, … ] //this prints the whole array 
// printArray(...nums) // 1 24 5 5 5 3 3 7 ..... //this prints out each element seperately 

// function showTime() {
//     let date = new Date();
//     return ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}  `
// }

// console.log(showTime())  //21/7/2022  20:23  

// //5. Declare a function name swapValues. This function swaps value of x to y.
// const swapValues = (x, y) => {
//     console.log('before swaping:', { x, y })
//     let tempX = x;
//     x = y;
//     y = tempX;
//     console.log('after swaping:', { x, y })

// }
// swapValues(7, 69)  // before swaping: Object { x: 7, y: 69 }    after swaping: Object { x: 69, y: 7 }


// // Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// function reverseArray(...array) {
//     let revArray = []
//     // console.log('original arr: ', array);

//     for (let i = array.length - 1; i >= 0; i--) {
//         revArray.push(array[i])
//     }
//     // console.log('reversed arr:');

//     return revArray;
// }
// let randNums = [1, 2, 3, 4, 5];
// console.log(reverseArray(...randNums))  //Array(5) [ 5, 4, 3, 2, 1 ]
// //you can also directly pass all the element of the array as args and it will make a array out of it cuz we used ... spread operator in the parameter.
// console.log(reverseArray(1, 2, 'a', 5, 'b', 69, 'z'))  //Array(7) [ "z", 69, "b", 5, "a", 2, 1 ]

// function capitalizedArray(...array) {
//     let capatalizedArr = []
//     array.forEach(element => {
//         capatalizedArr.push(element.toString().toUpperCase())
//     });

//     return capatalizedArr;
// }

// console.log(capitalizedArray('ammad', 'uzair', 'Rafay', 'Muazzam', 0, 65, true, 'hello')) //Array(8) [ "AMMAD", "UZAIR", "RAFAY", "MUAZZAM", "0", "65", "TRUE", "HELLO" ]


// function addItem(item) {
//     let arr = [];
//     arr.push(item)
//     return arr;
// }
// console.log(addItem(69))
// console.log(addItem(true))
// console.log(addItem('heloo'))

// function removeItem(arr, index) {
//     arr.splice(index, 1) // 2nd parameter means remove one item only
//     return arr;
// }

// console.log(removeItem([1, 2, 3, 4], 2))

// function sumOfNumbers(n) {
//     let sum = 0;
//     if (n < 2) {
//         return n;
//     }
//     for (let i = n; i >= 1; i--) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfNumbers(10)) //55


// function sumOfOdds(n) {
//     let oddsSum = 0;

//     if (n < 2) {
//         return n;
//     }

//     for (let i = n; i >= 1; i--) {
//         if (i % 2 !== 0) {
//             oddsSum += i;
//         }
//     }
//     return oddsSum;
// }

// console.log(sumOfOdds(10)) //25

// function sumOfEvens(n) {
//     let evensSum = 0;

//     if (n < 2) {
//         return n;
//     }

//     for (let i = n; i >= 1; i--) {
//         if (i % 2 === 0) {
//             evensSum += i;
//         }
//     }
//     return evensSum;
// }

// console.log(sumOfEvens(10)) //30

// function evensAndOdds(n) {
//     if (n < 0) {
//         console.log('The number of odds are 0');
//         console.log('The number of evens are 0');
//         return
//     }

//     let evens = 0;
//     let odds = 0;
//     for (let i = n; i >= 0; i--) {
//         i % 2 === 0 ? evens++ : odds++;
//     }
//     console.log(`The number of odds are ${odds}`);
//     console.log(`The number of evens are ${evens}`);

// }

// evensAndOdds(0);

function generateRandomNumber(n) {
    return Math.floor(Math.random() * n);

}

// Writ a function which generates a randomUserIp.
function randomUserIpGenerator() {
    let userIp = ''
    for (let i = 0; i < 4; i++) {
        let randomNumber = generateRandomNumber(256);
        // userIp.concat(`${randomNumber}.`)
        userIp += (`${randomNumber}.`)
    }
    // console.log(userIp.lastIndexOf('.'))
    userIp = userIp.substring(0, userIp.lastIndexOf('.'))
    return userIp;
}
console.log(randomUserIpGenerator())
