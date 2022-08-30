// // Destructuring and Spread

// // Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// // Destructing Arrays

// const numbers = [1, 2, 3]
// let [numOne, numTwo, numThree, num4] = numbers

// console.log(numTwo) //2
// console.log(num4) //undefined

// // skipping a val
// // If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

// const names = ['muazzam', 'ali', 'muazzy', 'soomro']
// let [name1, , name3, name4] = names

// console.log(name1) //muazzam
// console.log(name3) //muazzy
// console.log(name4) //soomro

// // another example                          
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// const [frontEnd, backEnd] = fullStack

// console.log(frontEnd)
// console.log(backEnd)

// // Note: We can use default value in case the value of array for that index is undefined:

// const randArr = ['Muazzam', undefined, 69]

// // let [myName, cast = 'Soomro', num] = randArr

// // console.log(myName)
// // console.log(cast) //Soomro
// // console.log(num)

// // if we do not use or specify default value then:

// // let [myName, cast, num] = randArr

// // console.log(myName)
// // console.log(cast) //undefined
// // console.log(num)


// // if we use a default value on the item that is already defined

// let [myName = 'muazzy', cast = 'soomro', num = 96] = randArr

// console.log(myName) //Muazzam , cuz the element is already defined so theres no need for default val
// console.log(cast) //soomro
// console.log(num) //69, cuz the element is already defined so theres no need for default val


// // We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

// //to store all the of the array or basically copying an array
// const arr = [1, 4, 5, 6, 7, 8, 11, 9, 0, 2]
// let [...all] = arr

// console.log(all) //Array(10) [ 1, 4, 5, 6, 7, 8, 11, 9, 0, 2 ]

// //to store some of the elements of arr

// let [n1, n2, n3, ...restOfTheElements] = arr
// console.log(n1) //1
// console.log(n2) //4
// console.log(n3) //5
// console.log(restOfTheElements) //Array(7) [ 6, 7, 8, 11, 9, 0, 2 ]



// //Destructuring during iteration
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// // for (const [country, city] of countries) {
// //     console.log(country)
// //     console.log(city)

// // }
// ////op: 
// // Finland script
// // Helsinki script
// // Sweden script
// // Stockholm script
// // Norway script
// // Oslo


// for (const [frontEnd, backEnd, extra] of fullStack) {
//     console.log(frontEnd)
//     console.log(backEnd)
//     console.log(extra) //no output cuz there's only 2 elements in the fullStack arr

// }


//***********************************//

// Destructuring Object
// example:
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

// console.log(width, height, area, perimeter) //20 10 200 undefined (cuz perimeter is not defined)


///Renaming during structuring (i.e Renaming the keys)

// let { width: w, height: h, area: a, perimeter: p } = rectangle
// console.log(w, h, a, p) ////20 10 200 undefined (cuz perimeter is not defined)


///*********************///
// If the key is not found in the object the variable will be assigned to undefined.

// Sometimes the key might not be in the object, in that case we can give a default value during declaration.See the example.

// setting the default value (of a key) during declaration 


const rectangle2 = {
    width2: 20,
    height2: 10,
    area2: 200
}

//the key name here should match the original one otherwise it will show undefined cuz it cant find the key of that new name
let { width2, height2, area2, perimeter2 = 69 } = rectangle2

// console.log(width2, height2, area2, perimeter2)





//***********************************************//
// Destructuring keys as  a function parameters.

// Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

// Object parameter WITHOUT destructuring 

const rect = {
    width: 20,
    height: 15
}

const calculatePerimeterOfRectangle = rectangle => 2 * (rectangle.width + rectangle.height)

// calling the function

console.log(calculatePerimeterOfRectangle(rect)) //70


//another example of Object parameter WITHOUT destructuring

//Another Example
const person = {
    firstName: 'Muazzam',
    lastName: 'Soomro',
    age: 20,
    country: 'Pakistan',
    job: 'FullStack Flutter & FrontEnd Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Dart',
        'Flutter',
        'Firebase',
        'Python',
    ],
    languages: ['English', 'Sindhi', 'Urdu']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}

console.log(getPersonInfo(person)) //Muazzam Soomro lives in Pakistan. He is  20 years old. He is an FullStack Flutter & FrontEnd Developer. He teaches HTML, CSS, JavaScript, React, Dart, Flutter, Firebase and Python. He speaks English, Sindhi and a little bit of Urdu.



// Object parameter with Destructuring

//you can also set default values incase one of the key is undefined
const DcalculatePerimeterOfRectangle = ({ width = 0, height = 0 }) => 2 * (width + height)

console.log(DcalculatePerimeterOfRectangle(rect)) //70

// Let us create a function which give information about the person object with destructuring
const DgetPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He Develops Software using ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(DgetPersonInfo(person)) //Muazzam Soomro lives in Pakistan. He is 20 years old. He is an FullStack Flutter & FrontEnd Developer. He Develops Software using HTML, CSS, JavaScript, React, Dart, Flutter, Firebase and Python. He speaks English, Sindhi and a little bit of Urdu.



// All in all using destructuring to destructure keys of a object as a function parameters is a handy way to reduce the amout of code you write. Although it will work exactly like when you call the object keys using . (dot)


// Destructuring object during itteration 
// works similarly like when destructuring a array during itteration
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}

// op:
/*
Prepare JS Test 4/1/2020 8:30 true script
Give JS Test 4/1/2020 10:00 false script
Assess Test Result 4/1/2020 1:00 false
*/








/******************************************************************************/
// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array.In addition to that we use spread operator to spread array elements to another array.

// using spread operator to get the rest of the elements
// eg:
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let [num1, num2, num3, ...rest] = arr2

console.log(num1, num2, num3) // 1 2 3
console.log(rest)  //Array(7) [ 4, 5, 6, 7, 8, 9, 0 ]

//using spread operatorr to copy an array

const odds = [1, 3, 5, 7, 9]
console.log(odds) //Array(5) [ 1, 3, 5, 7, 9 ]
const oddNums = [...odds]
console.log(oddNums) //Array(5) [ 1, 3, 5, 7, 9 ]

//another example (adding or combining two arrays into one)

const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack) //Array(7) [ "HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB" ]


//using spread operator to copy an object
const ogUser = {
    name: 'Muazzam',
    cast: 'Soomro',
    country: 'Pakistan',
    id: 69
}

const copyOfUser = { ...ogUser }
console.log(copyOfUser) //Object { name: "Muazzam", cast: "Soomro", country: "Pakistan", id: 69 }

//MODIFYING OR CHANGING the object while copying

const copyOfUser2 = { ...ogUser, name: 'Muazzy' }
console.log(copyOfUser2) //Object { name: "Muazzy", cast: "Soomro", country: "Pakistan", id: 69 }


//Using spread operator with arrow function

// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. 
// note: If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const printAllElements = (...args) => console.log(args)

printAllElements(1, 2, 3, 43, 5, 6, 7, 'fs', true) //Array(9) [ 1, 2, 3, 43, 5, 6, 7, "fs", true ]


// finding sum of all nums
const sumOfAllNums = (...nums) => {
    let totalSum = 0
    nums.forEach(element => {
        if (typeof element === 'number') {
            totalSum += element
        }
    });
    return totalSum
}

console.log(sumOfAllNums(1, 2, '67', 3, 4)) //10

// using for of loop
const addAllnums = (...nums) => {
    let totalSum = 0
    for (const num of nums) {
        if (typeof num === 'number') {
            totalSum += num
        }
    }

    return totalSum
}

console.log(addAllnums(1, 2, '67', 3, 4, true)) //10