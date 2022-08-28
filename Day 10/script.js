// // In Arrays: In Sets
// // push  : add
// // pop   : remove
// //length  :  size


// //creating an empty set

// const languages = new Set()
// console.log(languages) //Set []

// // creating an set from a array
// const countries = [
//     'Afghanistan',
//     'Pakistan',
//     'Tajikistan',
//     'United Kingdom',
//     'India',
//     'United States Of America',

// ]

// const moreCountries = [
//     'Romania',
//     'Russia',
//     'Alabama'
// ]

// const setOfCountries = new Set(countries)
// console.log(setOfCountries) //Set(6) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America" ]

// // // set is an itterable object just like a array
// // //we can itterate thru each element
// // // console.log('Using forEach')
// // setOfCountries.forEach(
// //     (country) => console.log(country)
// // )

// // // console.log('Using for of')
// // for (const country of countries) {
// //     console.log(country)
// // }

// // Adding an element to a set
// setOfCountries.add(12)
// console.log(setOfCountries)  //Set(7) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America", 12 ]

// //Deleting an element from a set
// setOfCountries.delete(12)
// console.log(setOfCountries)  //Set(7) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America"]


// //using loop to add more countries to setOfCountires

// for (newCountry of moreCountries) {
//     setOfCountries.add(newCountry)
// }
// console.log(setOfCountries)  //Set(9) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America", "Romania", "Russia", "Alabama" ]


// //checking if an element is in the set : returns a boolean
// console.log(setOfCountries.has('Romania')) //true
// console.log(setOfCountries.has('romania')) //false  (case sensitive)


// //getting length (Size) of a Set
// console.log(setOfCountries.size) //9


// //Clearing the set (i.e removing all the elements from a set)
// setOfCountries.clear()
// console.log(setOfCountries) //Set []
// console.log(setOfCountries.size) //0


// //Sets are mostly used from counting unique items in an array (cuz set only consists of unique items even when you create it from an array)
// //You can use sets for counting unique numbers in a array
// // You can use sets for counting unique names or values in a array (for example finding count of each unique item in a big arr)

// // example:
// //same problem i did in last Day 09 ex lvl 3, doing it now using sets
// const allLanguages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]

// const setOfUniqueLanguages = new Set(allLanguages)
// // console.log(setOfUniqueLanguages) //Set(4) [ "English", "Finnish", "French", "Spanish" ]
// const langCounts = []


// setOfUniqueLanguages.forEach((language) => {
//     const filteredLanguage = allLanguages.filter((lang) => lang === language)
//     langCounts.push({ language: language, count: filteredLanguage.length })
// })

// console.log(langCounts)

// //using it to count or store unique numbers from a array of numbers

// const randNums = [0, 2, 3, 5, 1, 4, 5, 6, 5, 6, 0, 7, 69, 101, 69]
// console.log(randNums.length) //15

// const setOfUniqueRandNums = new Set(randNums)
// console.log(setOfUniqueRandNums) //Set(10) [ 0, 2, 3, 5, 1, 4, 6, 7, 69, 101 ]
// console.log(setOfUniqueRandNums.size) //10


// //You can use Sets to find similar items in two array: i.e union of sets
// // Union of sets
// // finding a union of two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b] //union of two sets //spread operator to pull the whole array 

// let A = new Set(a) //conveting a (array) to set , so it should only contain unique items
// let B = new Set(b) //conveting b (array) to set , so it should only contain unique items
// //result: Union of AB i.e AUB

// let AUB = new Set(c) //only unique items will be returned
// console.log(AUB) //Set(6) [ 1, 2, 3, 4, 5, 6 ]

// //you can use sets to find similar elements of an array that are also present in the other array
// // Intersection of sets 
// // To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

// let A_intersection_B = a.filter((number) => B.has(number))  //filter the numbers that are not present in the B
// let A_intersection_B_set = new Set(A_intersection_B)
// console.log(A_intersection_B_set) //Set(3) [ 3, 4, 5 ]

// //*************************************************//
// //you can use sets to find different elements of an array that are not present in the other array
// // Intersection of sets 
// // Difference of Sets
// // To find an the difference between two sets can be achieved using filter.Lets find the different of set A and set B(A \ B)

// let A_diff_B = a.filter((number) => !B.has(number))
// let A_diff_B_set = new Set(A_diff_B)
// console.log(A_diff_B_set) //Set [ 1, 2 ]


//See later: Difference between Maps and Objects
//Maps 
// creating an empty map
const map = new Map()
console.log(map) //Map(0)
console.log(typeof map) //object cuz everything in js is an object


//creating a map from an array
let arrOfcountriesWithCapitals = [
    ['Pakistan', 'Islamabad'],
    ['USA', 'Washington DC'],
    ['United Kingdom', 'London'],
]

const mapOfcountriesOfCapitals = new Map(arrOfcountriesWithCapitals)
console.log(mapOfcountriesOfCapitals)  //{ Pakistan → "Islamabad", USA → "Washington DC", "United Kingdom" → "London" }

// getting the length / size of a map
console.log(mapOfcountriesOfCapitals.size) //3


// Adding values to a map
//.set (method is used for adding values to the map)

/////////////////////////////  key          value
mapOfcountriesOfCapitals.set('Bangladesh', 'Dhaka')
console.log(mapOfcountriesOfCapitals)  //Map(4) { Pakistan → "Islamabad", USA → "Washington DC", "United Kingdom" → "London", Bangladesh → "Dhaka" }
console.log(mapOfcountriesOfCapitals.size) //4

//Getting a value from Map
console.log(mapOfcountriesOfCapitals.get('pakistan')) //undefined  //cuz its case senisitve, and the key defined in the map is as Pakistan , not pakistan
console.log(mapOfcountriesOfCapitals.get('Pakistan'))  //Islamabad

console.log(mapOfcountriesOfCapitals.get('Islamabad')) //undefined cuz there is no key as Islamabad, and Islamabad is a value for pakistan key


//Checking if a key exists in a Map
console.log(mapOfcountriesOfCapitals.has('Pakistan')) //true
console.log(mapOfcountriesOfCapitals.has('pakistan')) //false
console.log(mapOfcountriesOfCapitals.has('Islamabad')) //false
console.log(mapOfcountriesOfCapitals.has('Bangladesh')) //true

//Map is a itterable object like an array, you can itterate/loop thru it

// where as objects are not itterable: see the example below
// const obj = {
//     m: 'muazzam',
//     a: 'ammad',
//     num: 67
// }

// for (o of obj) {
//     console.log(o) //Uncaught TypeError: obj is not iterable
// }

//printing all values from map by itterating i.e using loop

// mapOfcountriesOfCapitals.forEach((capital, country) => console.log(country, capital)) //first value , then key
// output:
// Islamabad Pakistan script
// Washington DC USA script
// London United Kingdom script
// Dhaka Bangladesh

// using for of loop

// this will not work
// for (const country, capital of mapOfcountriesOfCapitals) {

// }

// for (const [country, capital] of mapOfcountriesOfCapitals) {
//     console.log(country, capital)
// }

// // syntax: 
// for (const [key, value] of mapOfcountriesOfCapitals) {
//      console.log(key, value)
// }

// for each syntax
// map.forEach((value, key) => {
//     console.log(key, value)
// });

