//Continue from Callback function

// A callback function is a function which can be passed in as a parameter to other function

// example:
//you can name the function anything you want
const callbackFunction = (n) => n ** 2; //callback function 

//function that takes other function as a callback

//cube function is a higher order function cuz it takes a function as a parameter 
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callbackFunction, 3)) //27


//Returning function 

// Higher order functions can also return function as a value

const higherOrder = a => {
    const doSomething = b => {
        const lastly = c => {
            return a + b + c  //lastly function will return this
        }
        return lastly //doSomething will return lastly function, So doSomething function is also a higher function
    }
    return doSomething // higherOrder will return doSomething function, So it is a higher order function
}

// Note: forEach method uses callback Function
// example:

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    //it is a simple function which takes the array element and add it to the sum 
    const callback = function (element) {
        sum += element
    }

    //this callback function will be called for each element of the array
    arr.forEach(callback)
    return sum //finally returning sum of the array

}
console.log(sumArray(numbers)) //15


// function getSumOfArray(arr) {

//     let sum = 0

//     function callback(ArrElement) {
//         sum += ArrElement
//     }

//     //this callback function will be called for each element of the array
//     arr.forEach(callback)

//     return sum //finally returning sum of the array
// }


//simplified version of the above function
// const simplifiedSum = arr => {
//     let sum = 0
//     arr.forEach(function (arrElement) {
//         sum + arrElement
//     })
//     return sum
// }
// console.log(simplifiedSum(numbers)) //15

// *********************************************************************************
// SETTING TIME
// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.


// There are two properties for setting time
//1. setInterval  //interval means the period of time marked off by or between two events, instants, etc

//2. setTimeout //scheduling or waiting for sometime and then do something

//Setting Interval using a setInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

//// syntax
// function callback() {
//     // code goes here
// }
// setInterval(callback, duration)

function callback() {
    console.log('Hi for some time')
}

// setInterval(callback, 1000) //it prints hello every second, 1000ms is 1s, also it does not stops 

// setInterval(callback, 1) //it prints hello every Milisecond, 1000ms is 1s, also it does not stops

// Setting a time using a setTimeout
function sayHello() {
    console.log('saying hello after waiting')
}

setTimeout(sayHello, 3000) //it calls or executes the function i.e ( prints hello) after wating for 3 seconds 


//continue from functional programming
