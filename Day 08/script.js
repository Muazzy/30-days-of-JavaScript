// Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.

a = 5 //this is also a global scope variable and found in the window object
b = 10 //this is also a global scope variable and found in the window object

//if i write a or b in browser console it is showing me the values of these variables


// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible



// A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.


// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

// Local Scope
// A variable declared as local can be accessed only in certain block code.
// Block Scope //a local var that is only accessible in certain block of code
// Function Scope //a local var that is only accessible inside a function

//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let value = false  //function scoped
// // block scope
//   if (true) {
//     // we can access from the function and outside the function but 
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     value = !value //we can access it in the if block cuz it is function scoped variable
//     console.log(a, b, c, value) // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible


// Note: A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc).Block in JavaScript is a code in between two curly brackets({}).

//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
//   console.log(gravity) , ReferenceError: gravity is not defined

if (true) {
    let gravity = 9.81 // if we use let then it will not be accessed outside the this code block
    console.log(gravity) // 9.81
}
// console.log(gravity) //, Uncaught ReferenceError: gravity is not defined


//however if we use var keyword with gravity then it will be accessed outside this code block
if (true) {
    var gravity = 10 // var used so it will be function scoped instead of block scoped
    console.log(gravity) // 10
}
console.log(gravity) //10

// var: function scoped
// let, const : block scoped

//   for(var i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   console.log(i) // 3

for (var i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
console.log(`this is outside the block of code. and still ${i} var can be used`)
console.log(i) // 3


// In ES6 and above there is let and const, so you will not suffer from the sneakiness of var. When we use let our variable is block scoped and it will not infect other parts of our code.

// Thats why you should always prefer to use let or const keyword instead of var 


// function letsLearnScope() {
//     // you can use let or const, but gravity is constant I prefer to use const
//     const gravity = 9.81
//     console.log(gravity)

//   }
//   // console.log(gravity), Uncaught ReferenceError: gravity is not defined

//   if (true){
//     const  gravity = 9.81
//     console.log(gravity) // 9.81
//   }
//   // console.log(gravity), Uncaught ReferenceError: gravity is not defined

//   for(let i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   // console.log(i), Uncaught ReferenceError: i is not defined

// The scope let and const are the same. The difference is only reassigning. We can not change or reassign the value of the const variable. I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.

//Object
// Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.

// object ----> properties ----> values
// object is basically a key value pair

//const is prefered when creating objects
// syntax:
// const car = {} //empty object

// Creating an objecting with values //fix this typo
// Creating an object with values
// Now, the person car object has model_name, company, top_speed, color, type properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

// lets see some examples of object, each key has a value in the object

const car = {
    model_name: 'Mehran Vxr',
    company: 'Suzuki',
    top_speed: 69,
    isHybrid: false,
    moveForward: () => {
        console.log('moving forward')
    }, //anonymous function
    movingInTopSpeed: function () {
        console.log(`moving with the speed of ${this.top_speed}`) //apparently cant access the values of this object using . in arrow function
    },
}

console.log(car) //Object { model_name: "Mehran Vxr", company: "Suzuki", top_speed: 69, isHybrid: false, moveForward: moveForward() }

//Getting values from an object
// We can access values of object using two methods:

// using . followed by key name if the key-name is a one word
// using square bracket and a quote

// car.movingInTopSpeed() //moving with the speed of 69
// console.log(car.top_speed) //69
// console.log(car.company) //Suzuki
// console.log(car.model_name) //Mehran vxr
// console.log(car.isHybrid) //false
// car.moveForward() //moving forward

// values can also be accessed using square bracket and key name

car['movingInTopSpeed'] //no output

console.log(car['top_speed']) //69
console.log(car['company']) //Suzuki
console.log(car['model_name']) //Mehran vxr
console.log(car['isHybrid']) //false
car['moveForward'] //no output
console.log(car['moveForward']) //function moveForward()