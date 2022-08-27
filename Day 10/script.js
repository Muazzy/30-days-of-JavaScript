// In Arrays: In Sets
// push  : add
// pop   : remove
//length  :  size


//creating an empty set

const languages = new Set()
console.log(languages) //Set []

// creating an set from a array
const countries = [
    'Afghanistan',
    'Pakistan',
    'Tajikistan',
    'United Kingdom',
    'India',
    'United States Of America',

]

const moreCountries = [
    'Romania',
    'Russia',
    'Alabama'
]

const setOfCountries = new Set(countries)
console.log(setOfCountries) //Set(6) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America" ]

// // set is an itterable object just like a array
// //we can itterate thru each element
// // console.log('Using forEach')
// setOfCountries.forEach(
//     (country) => console.log(country)
// )

// // console.log('Using for of')
// for (const country of countries) {
//     console.log(country)
// }

// Adding an element to a set
setOfCountries.add(12)
console.log(setOfCountries)  //Set(7) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America", 12 ]

//Deleting an element from a set
setOfCountries.delete(12)
console.log(setOfCountries)  //Set(7) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America"]


//using loop to add more countries to setOfCountires

for (newCountry of moreCountries) {
    setOfCountries.add(newCountry)
}
console.log(setOfCountries)  //Set(9) [ "Afghanistan", "Pakistan", "Tajikistan", "United Kingdom", "India", "United States Of America", "Romania", "Russia", "Alabama" ]


//checking if an element is in the set : returns a boolean
console.log(setOfCountries.has('Romania')) //true
console.log(setOfCountries.has('romania')) //false  (case sensitive)


//getting length (Size) of a Set
console.log(setOfCountries.size) //9


//Clearing the set (i.e removing all the elements from a set)
setOfCountries.clear()
console.log(setOfCountries) //Set []
console.log(setOfCountries.size) //0


//Sets are mostly used from counting unique items in an array (cuz set only consists of unique items even when you create it from an array)
//You can use sets for counting unique numbers in a array
// You can use sets for counting unique names or values in a array (for example finding count of each unique item in a big arr)

// example:
//same problem i did in last Day 09 ex lvl 3, doing it now using sets
const allLanguages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfUniqueLanguages = new Set(allLanguages)
// console.log(setOfUniqueLanguages) //Set(4) [ "English", "Finnish", "French", "Spanish" ]
const langCounts = []


setOfUniqueLanguages.forEach((language) => {
    const filteredLanguage = allLanguages.filter((lang) => lang === language)
    langCounts.push({ language: language, count: filteredLanguage.length })
})

console.log(langCounts)

//using it to count or store unique numbers from a array of numbers

const randNums = [0, 2, 3, 5, 1, 4, 5, 6, 5, 6, 0, 7, 69, 101, 69]
console.log(randNums.length) //15

const setOfUniqueRandNums = new Set(randNums)
console.log(setOfUniqueRandNums) //Set(10) [ 0, 2, 3, 5, 1, 4, 6, 7, 69, 101 ]
console.log(setOfUniqueRandNums.size) //10


//Start From Union of Sets

