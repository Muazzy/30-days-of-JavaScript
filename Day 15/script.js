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

//we can create as many objs as we want using the blueprint (i.e class)
let withoutDefiningParameters = new EmailAuthentication()
console.log(withoutDefiningParameters) //Object { email: undefined, password: undefined }

let myEmailPass = new EmailAuthentication('test123@gmail.com', '123');
myEmailPass.showCredentials() //Email: test123@gmail.com, Password: 123


// Default values with constructors
// The constructor function properties may have a default value like other regular functions.

class Result {
    constructor(obtainedMarks = 0, totalMarks = 100) {
        this.obtainedMarks = obtainedMarks;
        this.totalMarks = totalMarks;
    }

    printPercentage() {
        let percentage = (this.obtainedMarks / this.totalMarks) * 100
        console.log(`${percentage.toFixed(1)}%`)
    }
}

const withDefaultValues = new Result();
withDefaultValues.printPercentage() //0.0%

const myResult = new Result(70); //with only one parameter i.e obtained marks
myResult.printPercentage() //70.0%

const myResult2 = new Result(68.32, 120); // with both param
myResult2.printPercentage() //56.9%



// class Methods
// The constructor inside a class is a builtin function which allow us to create a blueprint for the object. 
// In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

// class Result {
//     constructor(obtainedMarks = 0, totalMarks = 100) {
//         this.obtainedMarks = obtainedMarks;
//         this.totalMarks = totalMarks;
//     }

//     //method
//     printPercentage() {
//         let percentage = (this.obtainedMarks / this.totalMarks) * 100
//         console.log(`${percentage.toFixed(1)}%`)
//     }
// }


// Properties with initial value
// When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. 
// So, we may have a starting score or score which is zero.In other way, we may have an initial skill and we will acquire some skill after some time.


class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score) //0
console.log(person2.score) //0

console.log(person1.skills) //[]
console.log(person2.skills) //[]


// A class's method could be a regular method or getter or setter

// getter
// The get method allow us to access value from the object.
//  We write a get method using keyword get followed by a function. 
//  Instead of accessing properties directly from the object we use getter to get the value.
//we use it to so that our private variables are not modified and it also maintains a level of abstraction.


class Person2 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 100
        this.skills = ['reading']
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const person3 = new Person2('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person4 = new Person2('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// console.log(person3.getScore) // We do not need parenthesis to call a getter method
// console.log(person4.getScore) //100

// console.log(person3.getSkills) // [reading]
// console.log(person4.getSkills) // [reading]


// setter
// The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.


class SomeClass {
    constructor(name, cast) {
        this.name = name
        this.cast = cast
        this.score = 0
        this.skills = []
    }

    set addSkill(newSkill) {
        this.skills.push(newSkill)
    }

    set setScore(score) {
        this.score += score
    }

    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const obj69 = new SomeClass('myName', 'myCast');

obj69.setScore = 7
console.log(obj69.getScore) //7

obj69.addSkill = 'reading'
console.log(obj69.getSkills) //Array ["reading"]

//continue from static method