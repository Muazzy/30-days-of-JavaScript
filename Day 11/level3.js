// // Destructure the countries object print name, capital, population and languages of all countries

// countries.forEach(
//     (
//         { name, capital, languages, population, flag, currency }
//     ) => {
//         console.log(name, capital, languages, population, flag, currency)
//     });



// // A junior developer structure student name, skills and score in array of arrays which may not easy to read.Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [stdName, skills, [, , jsScore, reactScore]] = student

// console.log(stdName)
// console.log(skills)
// console.log(jsScore, reactScore)


// // Write a function called convertArrayToObject which can convert the array to a structure object.

// function covertArrayToObject(array) {

//     let result = []
//     array.forEach(([stdName, skills, scores]) => {

//         const obj = {
//             name: stdName,
//             skills: skills,
//             scores: scores
//         }

//         result.push(obj)
//     });

//     return result
// }

// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

// console.log(covertArrayToObject(students))

// Copy the student object to newStudent without mutating the original object.In the new object add the following ?

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

let newStudent = { ...student }
console.log(newStudent)


let { name, age, skills } = newStudent
console.log(name, age, skills)


// let { frontEnd, backEnd, dataBase, dataScience } = skills
frontEnd.push({ skill: 'Bootstrap', level: 8 })
backEnd.push({ skill: 'Express', level: 9 })
dataBase.push({ skill: 'SQL', level: 8 })
dataScience.push('SQL')


console.log(newStudent)