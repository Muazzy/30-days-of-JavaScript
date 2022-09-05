// JavaScript is a loosely - typed language.Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

// JavaScript provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

// 1. try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

// 2. catch: write code to do something in catch block when an error occurs. 
// Note: The catch block can have parameters that will give you error information.
// Catch block is used to log an error or display specific messages to the user.

// 3. finally: finally block will always be executed regardless of the occurrence of an error. 
// Note: The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.


// example: 
try {
    let lastName = 'Muazzam'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}

// op:
// Name of the error ReferenceError
// Error message fistName is not defined
// In any case I will be executed


//Throw
// throw: the throw statement allows us to create a custom error.We can throw a string, number, boolean or an object. 
// Use the throw statement to throw an exception.
// When you throw an exception, expression specifies the value of the exception.
// Each of the following throws an exception:

throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()


//Erorr types

// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

// SyntaxError: A syntax error has occurred

// TypeError: A type error has occurred
// let num = 10
// console.log(num.toLowerCase())

// Uncaught TypeError: num.toLowerCase is not a function ,  at <anonymous>:2:17

// These are some of the common error you may face when you write a code. Understanding errors can help you to know what mistakes you made and it will help you to debug your code fast.

