// JavaScript is an object oriented programming language.Everything in JavScript is an object, with its properties and methods.We create class to create an object.

// A Class is like an object constructor, or a "blueprint" for creating objects.

// We instantiate a class to create an object.The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

// Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

// classes helps to reduce amount of code and repetition of code.

// Defining a class in js
// To define a class 
//use keyword "class"
//add the name of class (it should be CamelCase)
//with two curly braces

// syntax 
class ClassName {
    //code here 
}

// Class instantiation
// instantiation of a class means creating an object from a class

const newObj = new ClassName()
console.log(newObj) //Object {  }

// Class Constructor
// The constructor is a builtin function which allows as to create a blueprint for our object.
// The constructor function starts with a keyword constructor followed by a parenthesis.
// Inside the parenthesis we pass the properties of the object as parameter.

// Note: We use the this keyword to attach the constructor parameters with the class.

// syntax

class EmailAuthentication {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    showCredentials() {
        console.log(`Email: ${this.email}, Password: ${this.password}`)
    }
}

let myEmailPass = new EmailAuthentication('test123@gmail.com', '123');
myEmailPass.showCredentials() //Email: test123@gmail.com, Password: 123