// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// // Find the person who has many skills in the users object.

// // Count logged in users, count users having greater than equal to 50 points from the following object.

// // Find people who are MERN stack developer from the users object

// // Set your name in the users object without modifying the original users object

// // Get all keys or properties of users object

// // Get all the values of users object

// // Use the countries object to print a country name, capital, populations and languages.


// let userEntries = Object.entries(users)
// // console.log(userEntries)



// function getThePerson() {
//     let maxSkills = 0;
//     let personWithManySkills = '';

//     for (user of userEntries) {
//         const userName = user[0]
//         const userObject = user[1]
//         if (userObject.skills.length > maxSkills) {
//             maxSkills = userObject.skills.length
//             personWithManySkills = userName;
//         }

//     }
//     return personWithManySkills
// }

// // console.log(getThePerson())

// function count() {
//     let loggedInUsers = 0;
//     let personsWith50Pts = 0;

//     for (user of userEntries) {
//         const userObject = user[1]
//         if (userObject.isLoggedIn) {
//             loggedInUsers++;
//         }
//         if (userObject.points >= 50) {
//             personsWith50Pts++;
//         }

//     }
//     return `Logged In users: ${loggedInUsers}.\nUsers having greater than equal to 50 points: ${personsWith50Pts}`
// }


// // console.log(count())





// function getTheMERNDevs() {
//     //array for storing mern stack devs
//     let mernDevs = []

//     let mernStack = ['MongoDB', 'Express', 'React', 'Node']

//     for (user of userEntries) {
//         const userName = user[0]
//         const userObject = user[1]

//         let containsAll = mernStack.every(i => userObject.skills.includes(i));


//         if (containsAll) {
//             mernDevs.push(userName)
//         }

//     }
//     return mernDevs
// }

// // console.log(getTheMERNDevs())

// cloneOfUsers = {}
// Object.assign(cloneOfUsers, users)
// // console.log(cloneOfUsers) //object

// //now getting its entries
// const cloneOfUserEntries = Object.entries(cloneOfUsers)

// for (cloneUser of cloneOfUserEntries) {
//     cloneUser[0] = 'Muazzam'
// }

// // console.log(cloneOfUserEntries)

// console.log(Object.keys(users)) //[ "Alex", "Asab", "Brook", "Daniel", "John", "Thomas", "Paul" ]
// console.log(Object.values(users)) //[ {…}, {…}, {…}, {…}, {…}, {…}, {…} ]

