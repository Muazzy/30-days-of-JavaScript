const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.

// forEach : used for itterating an array, takes a callback function (the callback function can take element, index and array as a parameter)

// where as map is almost similar to forEach, itterates an array and takes a callback function, however map is used for modification ie modifying an array, map will return a new array after applying specified modifications

//filter also itterates an array, and takes a callback function like map and forEach, but filter applies some filter condition (condition specified by you) on the array, and returns an filtered array, for example there is a numArr = [1,2,3,4,5,6,7,8], if you apply a filtering logic that you want to filter even numbers from this array then you will get a new array containing even nums like this : [2,4,6,8]

// if a array element pass the filtering condition, it is added to the array which will be returned otherwise it will be removed (or filtered)


// reduce: reduce function itterates the array and takes a callback function, the callback function takes three parameters: accumulator (pervious val) and current (current item or val) and an optional initial value (initial value of accumulator) parameter. it is recommanded to use an initial value. AND finally the reduce returns a single value. //mostly used for finding sum, multiple of an array etc.

// A callback function is simply a function which is passed in as a parameter to some other function

// function callback(name) {
//     console.log(`hellow ${name}`)
// }

// //callback function passed in as a parameter
// function greetings(userName, callback) {
//     return callback(userName)

// }
// greetings('muazzy', callback) //hellow muazzy

// countries.forEach(country => {
//     console.log(country)
// });

// names.forEach((name) => console.log(name))

// numbers.forEach((num) => console.log(num))

const upperCaseCountries = countries.map(function (element) {
    return element.toUpperCase()
})

console.log(upperCaseCountries)

const countriesLength = countries.map((element, index, arr) => arr.length)
console.log(countriesLength)  //Array(5) [ 5, 5, 5, 5, 5 ]

const squareOfNums = numbers.map((num) => num * num)
console.log(squareOfNums) //Array(10) [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

const upperCasedNames = names.map((name) => name.toUpperCase())
console.log(upperCasedNames) //Array(4)["ASABENEH", "MATHIAS", "ELIAS", "BROOK"]

const productsAndPrices = products.map((product) => `${product.product} is priced at ${product.price}`)
console.log(productsAndPrices)

const countriesContainingLand = countries.filter((country) => country.toLowerCase().includes('land'))
console.log(countriesContainingLand) //Array [ "Finland", "IceLand" ]

const countriesWith6Characters = countries.filter((country) => {
    return country.length === 6
})
console.log(countriesWith6Characters) //Array [ "Sweden", "Norway" ]


const countriesWith6CharactersOrMore = countries.filter((country) => {
    return country.length >= 6
})
console.log(countriesWith6CharactersOrMore) //Array(5) [ "Finland", "Sweden", "Denmark", "Norway", "IceLand" ]

const countriesWhichStartsWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesWhichStartsWithE) //Array []

const pricesWithValues = products.filter((product) => {
    return typeof product.price === 'number'
})
console.log(pricesWithValues) //Array(4) [ {…}, {…}, {…}, {…} ]

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
    return arr.filter((element) => typeof element === 'string')
}

let randArray = [1, true, false, 'S', 'muazzam', 69, 'stRIng']
console.log(getStringLists(randArray)) //Array(3) [ "S", "muazzam", "stRIng" ]

const sumOfNumbers = numbers.reduce((accumulator, current) => {
    return 0, accumulator + current //specify the accumulator initial value in the start when using normal function decleration
})

const sumOfNumbersExplicit = numbers.reduce((accumulator, current) =>
    accumulator + current, 0  //specify the accumulator inital value in the end when using a expilicit arrow function

)
console.log(sumOfNumbers) //55
console.log(sumOfNumbersExplicit) //55


// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// idk why this is giving weird results, will solve this
const concatenate = countries.reduce((acc, current) => {
    //initial value of acc is empty string ''
    return acc + ', ' + current

}
)

//It is giving these weird result and adding the sentence to each element cuz reduce function itterates the whole array and in each itteration it is giving the result + sentence which is equal to the current element + sentnce that's why it is giving result like this :  Finland, Sweden are north European countries, Denmark are north European 

// console.log(concatenate) //Finland, Sweden are north European countries, Denmark are north European countries, Norway are north European countries, IceLand are north European countries

function getConcatenatedSentence(sentence, countries) {
    return `${countries} ${sentence}`
}


console.log(getConcatenatedSentence('are north European countries', concatenate))

// Explain the difference between some and every
//some and every both return a boolean
//some is like || (OR) operator which returns true if at least one of the arr element satisfies the conditoin
//while every is && (AND) operator which returns true only and only when all of the arr elements satisfies the condition you passed in

const doesEveryCountryContainsLand = countries.every((element) => element.includes('land'))
console.log(doesEveryCountryContainsLand) //false

//Explain the difference between find and findIndex.
//find returns the element if found in the array
//findIndex returns the index or position of the element in the array that you were searching for, it the element is not found in the array it will return -1.

// Use find to find the first country containing only six letters in the countries array

const firstCountry = countries.find((element) => element.length === 6)
console.log(firstCountry) //Sweden

// Use findIndex to find the position of the first country containing only six letters in the countries array
const indexOfFirstCountry = countries.findIndex((element) => { return element.length === 6 })
console.log(indexOfFirstCountry) //1


// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const posOfNorway = countries.findIndex((element) => element === 'Norway')
console.log(posOfNorway) //3


// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const posOfRussia = countries.findIndex((element) => { return element === 'Russia' })
console.log(posOfRussia) //-1