// // Exercises: Level 2
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// 2. Find the sum of price of products using only reduce reduce(callback))
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const productsWithPrice = products.filter(
    (product) => typeof product.price === 'number'
)

// const totalPrice = productsWithPrice.reduce((acc, currentVal) => acc + currentVal.price) //will not work cuz by default accumulator initial value will be first element of the array and that is a object, so object+number will look something like this: [object Object]6810 (here [object Object] is the initial value of accumulator and the later numbers are the currentVal's values)

const totalPrice = productsWithPrice.reduce((acc, currentVal) => acc + currentVal.price, 0)  //here this will work cuz we set the initial val of the accumulator a number (0)

console.log(totalPrice) //27

// 2. Find the sum of price of products using only reduce reduce(callback))
const sumOfProducts = products.reduce((acc, current) =>
    acc + (typeof current.price === 'number' ? current.price : 0), 0
)
console.log(sumOfProducts)

console.log(countries.length) //250

// const endingWithIsland = countries.filter((element) => element.name.toLowerCase().endsWith('island'))
// console.log(endingWithIsland) //3

// const endingWithLand = countries.filter((element) => element.name.toLowerCase().endsWith('land'))
// console.log(endingWithLand) //13


// const endingWithStan = countries.filter((element) => element.name.toLowerCase().endsWith('stan'))
// console.log(endingWithStan) //7


// const endingWithIa = countries.filter((element) => element.name.toLowerCase().endsWith('ia'))
// console.log(endingWithIa) //34

function categorizeCountries(pattern) {
    return countries.filter((country) => country.name.toLowerCase().endsWith(pattern));
}

console.log(categorizeCountries('stan'))

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function firstLetter(arr, letter) {

    const filteredArr = arr.filter(
        (element) => {
            return element.name.startsWith(letter)
        }
    )
    return { filteredArr, noOfTimesUsed: filteredArr.length }

}

console.log(firstLetter(countries, 'U'))

// 5. Declare a getFirstTenCountries function and return an array of ten countries.Use different functional programming to work on the countries.js array

//desi approach xD

// function getFirstTenCountries(arr) {
//     let firstTenCountries = []
//     for (let x = 0; x < 10; x++) {
//         firstTenCountries.push(arr[x])
//     }
//     return firstTenCountries
// }
// console.log(getFirstTenCountries(countries))

// function getLastTenCountries(arr) {
//     let lastTenCountries = []
//     for (let x = arr.length - 1; x >= arr.length - 10; x--) {
//         lastTenCountries.push(arr[x])
//     }
//     return lastTenCountries.reverse()
// }
// console.log(getLastTenCountries(countries))

// same approach with filter

function getFirstTenCountries(arr) {
    return arr.filter((element, index) => {
        return index >= 0 && index < 10
    })
}

console.log(getFirstTenCountries(countries))



function getLastTenCountries(arr) {
    return arr.filter((element, index, arr) => {
        return index >= arr.length - 10 && index <= arr.length - 1
    })
}
console.log(getLastTenCountries(countries))



// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function mostUsedInitial(arr) {
    let mostUsed = ''
    let noOfTimesUsed = 0
    let alphabets = generateBigAbc()

    alphabets.forEach(

        (char) => {
            let currentCountriesWithXChar = []
            currentCountriesWithXChar = arr.filter((country) => {
                return country.name.startsWith(char)
            })

            if (noOfTimesUsed < currentCountriesWithXChar.length) {
                noOfTimesUsed = currentCountriesWithXChar.length
                mostUsed = char

                console.log(noOfTimesUsed)
                console.log(mostUsed)
            }
        }
    )

    return `Most used initial is ${mostUsed} which is used for ${noOfTimesUsed}`
}

console.log(mostUsedInitial(countries)) //Most used initial is S which is used for 33


function generateBigAbc() {
    let arr = []
    for (x = 65; x <= 90; x++) {
        arr.push(String.fromCharCode(x))
    }

    return arr
}