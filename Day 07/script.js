// // function without a parameter & return

// // function add() {
// //     let a = 2;
// //     let b = 7;
// //     console.log(a + b)
// // }
// // add() //9

// // //function returning a value
// // // Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. 
// // function subtract() {
// //     let a = 7
// //     let b = 2
// //     return a - b
// // }
// // let sub = subtract() //you can assign the return value to a function also
// // console.log(sub) //5
// // console.log(subtract())// 5  //you can also print the return value directly

// // // function with a parameter 
// // // In a function we can pass different data types(number, string, boolean, object, function) as a parameter.
// // //you can have as much parameters as you want.
// // function divide(dividend, divisor) {
// //     console.log(dividend / divisor)
// // }
// // divide(6, 2) //3
// // let d = divide(4, 2);
// // console.log(d)  //undefined cuz the divide function does not return a value, so by default the value of the function is undefined


// // // Function with unlimited number of parameters
// // // Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.

// // // Unlimited number of parameters in regular function
// // // A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

// // let arr = [1, 2]
// // console.log(typeof (arr)) //object
// // let emArr = Array();
// // console.log(typeof (emArr)) //object

// // function countriesThatYouHaveVisited() {
// //     console.log(arguments); //here this arguments is like an array object, it has stored all the arguments that are passed on
// //     //you can also acces each argument by their index just like we did in arrays
// //     // console.log(arguments); //Arguments { 0: "Romania", 1: "USA", 2: "USSR", 3: "GERMANY", 4: "ENGLAND", 5: "AUSTRALIA", 6: "PAKISTAN", 7: "INDIA", 8: "MALAYSIA", … }
// //     console.log(arguments.length) //prints out number of args
// //     console.log(arguments[0]) //prints out first arg
// //     console.log(arguments[arguments.length - 1]) //prints out last arg
// //     console.log(typeof (arguments)) //object
// //     // console.log(arguments.reverse()) // you cannot use the array functions here apperantly. 
// //     console.log(arguments.toString()) // [object Arguments]
// //     console.log(arguments[1].toString()) //toString works here 
// // }
// // countriesThatYouHaveVisited('Romania', 'USA', 'USSR', 'GERMANY', 'ENGLAND', 'AUSTRALIA', 'PAKISTAN', 'INDIA', 'MALAYSIA')



// // // Unlimited number of parameters in arrow function
// // // Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

// // //you can name the parameter'things' anything 
// // let wishList = (...things) => {
// //     // this does not work
// //     // console.log(arguments), arguments object not found in arrow function
// //     console.log(things)
// //     // console.log(arguments) //ReferenceError: arguments is not defined, cuz there is no arguments object in the arrow function
// // }
// // wishList('home', 'car', 'money', 'gym', 'boxing', 'honor')


// // const watchList = (...movies) => {
// //     console.log(movies)
// // }



// // // for understanding 
// // // function xyz(...args) {
// // //     // console.log(typeof (args)) //obeject
// // //     // console.log(typeof (arguments)) //object
// // //     console.log(args) //Array(6) [ 1, 2, 3, 4, 4, 4 ] //this stores arguments in a array object and you can use all the array functions on it too
// // //     console.log(arguments) //Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 4, 5: 4, … } //this default arguments object stores all the arguments in a Argument object and obv you cannot use array functions on it
// // // }
// // // xyz(1, 2, 3, 4, 4, 4)


// // //Anonymous function : functions without name
// // const gumnam = (...args) => console.log(args);
// // gumnam('this is a anonymous function using arrow function', 'hi');

// // const anonyFun = function () {
// //     console.log('This is a anonymous function declared in regular function')
// // }
// // anonyFun()


// // //Expression function
// // // Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

// // // using arrow function
// // const squareUsingArrow = (n) => n * n;
// // //using regular function
// // const squareUsingRegFun = function (n) {
// //     return n * n;
// // }

// // console.log(squareUsingRegFun(6)) //36
// // console.log(squareUsingArrow(6)) //36

// // // Self Invoking functions
// // // Self invoking functions are anonymous functions which do not need to be called to return a value.


// // let cube = (function (n) {
// //     return (n ** 3);
// // })

// // console.log(cube(3))

// // Arrow function
// // Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
// // Arrow function uses arrow instead of the keyword function to declare a function.

// // regular function declaration
// // function add(a, b) {
// //     return a + b;
// // }
// // console.log(7 + 8)

// // Same thing using arrow function
// // const add = (a, b) => a + b;

// //also like this
// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(3, 5))

// //if you have only one parameter then you can do this also 
// const sqr = n => {
//     return n * n
// }
// // // if we have only one line in the code block, it can be written as follows, explicit return, like this
// const square = n => n * n;
// console.log(square(4)) //16

// //Function with default parameters
// // Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values 
// // These default parameters are used to save you from null values and the error that comes along with them if the user does not pass any arguments 

// // syntax: 
// function functionName(parameter = value) //here this 'value' is the defualt parameter value 
// {
//     //code
// }
// // calling function 
// //     functionName()
// //     functionName(arg)

// function greetings(name = 'New User') {
//     return `Hello ${name}`;
// }
// console.log(greetings())  //with no args
// console.log(greetings('Muazzam'))  //with some args

// let date = new Date();

// function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
//     return currentYear - birthYear;
// }

// //without parameter
// console.log(calculateAge(2000));
// console.log('Age: ', calculateAge(2000)); //Age: 22

// //with parameter
// console.log(calculateAge(2000, 2021)); //21
// console.log('Age: ', calculateAge(2000, 2020)); //Age: 20

// // with Arrow function
// const knowYoAge = (birthYear, currentYear = new Date().getFullYear()) => currentYear - birthYear;

// console.log(knowYoAge(2000)) //22 //without parameter
// console.log(knowYoAge(2000, 2019)) //19 //without parameter
