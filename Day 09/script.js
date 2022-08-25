//Continue from Callback function

// A callback function is a function which can be passed in as a parameter to other function

// example:
//you can name the function anything you want
const callbackFunction = (n) => n ** 2; //callback function 

//function that takes other function as a callback

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callbackFunction, 3))
