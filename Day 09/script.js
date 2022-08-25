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

// setTimeout(sayHello, 3000) //it calls or executes the function i.e ( prints hello) after wating for 3 seconds 


//continue from functional programming

//Functional Programming

// 1. forEach 
// forEach: Iterate an array elements.We use forEach only with arrays.It takes a callback function with elements, index parameter and array itself.The index and the array optional.

// syntax
// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr)
// })
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
// })
// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))

// example: 

const names = ['Muazzam', 'Ammad', 'Jojo', 'naruTo', 'killie']

names.forEach(
    function (name) {
        console.log(name.toUpperCase());
    }
)
// output : MUAZZAM, AMMAD, JOJO, NARUTO, KILLIE

//here order matters: element , index ,arr
names.forEach(function (element, index, arr) {
    console.log(`${index}: ${element} of array [${arr}] `)
})

// 0: Muazzam of array [Muazzam,Ammad,Jojo,naruTo,killie]
// 1: Ammad of array [Muazzam,Ammad,Jojo,naruTo,killie] 
// 2: Jojo of array [Muazzam,Ammad,Jojo,naruTo,killie] 
// 3: naruTo of array [Muazzam,Ammad,Jojo,naruTo,killie] 
// 4: killie of array [Muazzam,Ammad,Jojo,naruTo,killie] 


// 2. map : mainly used for modification, i.e modifying array elements
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

const mappedArray = names.map(function (element, index, arr) {
    return `element: ${element}, index: ${index}, arr: ${arr}`
})

console.log(mappedArray) // Array(5) [ "element: Muazzam, index: 0, arr: Muazzam,Ammad,Jojo,naruTo,killie", "element: Ammad, index: 1, arr: Muazzam,Ammad,Jojo,naruTo,killie", "element: Jojo, index: 2, arr: Muazzam,Ammad,Jojo,naruTo,killie", "element: naruTo, index: 3, arr: Muazzam,Ammad,Jojo,naruTo,killie", "element: killie, index: 4, arr: Muazzam,Ammad,Jojo,naruTo,killie" ]

//this namesUpperCased arr holds an array of the uppercased elements of the name array
const namesUpperCased = names.map(function (element) {
    return element.toUpperCase()
})

console.log(namesUpperCased) //Array(5) [ "MUAZZAM", "AMMAD", "JOJO", "NARUTO", "KILLIE" ]

console.log(names) //Array(5) [ "Muazzam", "Ammad", "Jojo", "naruTo", "killie" ]

let nums = [1, 2, 3, 4, 5, 6]
const numsSquare = numbers.map((element) => element * element)

console.log(numbers) //Array(5) [ 1, 2, 3, 4, 5 ]
console.log(numsSquare) //Array(5) [ 1, 4, 9, 16, 25 ]

// 3. Filter: Filter out items which full fill filtering conditions and return a new array.

// returns a new array after applying filtering conditions, if a array element pass the filtering condition, it is added to the array which will be returned otherwise it will be removed (or filtered)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

// console.log(countries) //Array(11) [ "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", … ]

const countiresNotContainingLand = countries.filter(
    (country) => !country.includes('land')
)
// console.log(countiresNotContainingLand) //Array(9) [ "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Germany", "Hungary", "Japan", "Kenya" ]

const countiresContainingLand = countries.filter(
    (country) => country.includes('land')
)
// console.log(countiresContainingLand) //Array [ "Finland", "Ireland" ]

// 4. reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// arr.reduce((acc, cur) => {
//     // some operations goes here before returning a value
//     return
// }, initialValue)

const numbers2 = [1, 2, 3, 4, 5]
const sum = numbers2.reduce((acc, cur) => acc + cur, 0) //here this last number value is the initial value of the accumulator  //15
// console.log(sum)

const zero = numbers2.reduce((acc, cur) => acc * cur, 0) //0 //here this returns 0 cuz the value of the accumulator is 0 and anything multiplied with it gives 0
// console.log(zero)

const multipleOfArray = numbers2.reduce((previous, current) => previous * current, 1) //120
// console.log(multipleOfArray)

//you can make a factorial function using this reduce function

// 5. every
// every: Check if all the elements are similar in one aspect. It returns boolean
const persons = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = persons.every((name) => typeof name === 'string') // Are all strings?

// console.log(areAllStr) //true

const evenNums = [2, 4, 6, 8]
const areAllEvenNums = evenNums.every((num) => num % 2 === 0) //Are all nums even numbers
// console.log(areAllEvenNums) //true

const areAllOddNums = evenNums.every((num) => num % 2 !== 0) //Are all nums odd numbers
// console.log(areAllOddNums) //false


// 6. find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
// console.log(score) //Object { name: "Asabeneh", score: 95 }


const amongUs = ['among', 'among', 'imposter', 'among', 'imposter']

// this also does not work
// imposter = amongUs.find((element) => { return element.length > 5 }) //all this did not worked cuz of a single missing return keyword // make sure to add a return statement when using {} brackets with arrow function
// console.log(imposter)

//same problem, solved
// const firstImposter = amongUs.findIndex(
//     (element) => { return element.includes('imposter') }
// )
// console.log(firstImposter) //2

// 7. findIndex
// findIndex: Return the position of the first element which satisfies the condition, -1 if does not find

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]

const result = names2.findIndex((name) => name.length > 7)
console.log(result) // 0

const under20 = ages.findIndex((age) => age < 20)
console.log(under20) // 5

const positionOfImposter = amongUs.findIndex((element) => element.includes('imposter'))
console.log(positionOfImposter) //2

// 8. some: 
// Check if some of the elements are similar in one aspect.It returns boolean

const isThereImposterAmongUs = amongUs.some((element) => element.includes('imposter'))
console.log(isThereImposterAmongUs) //true


const randomArray = [1, 2, 3, 'str']
//note the ! operator here
const areTheseAllNumbers = randomArray.some((element) => typeof !element === 'string')
console.log(areTheseAllNumbers) //false

const areTheseAllStrings = amongUs.some((e) => { return typeof e === 'string' })
console.log(areTheseAllStrings) //true

const bools = [true, true, true, true]
const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue) //true