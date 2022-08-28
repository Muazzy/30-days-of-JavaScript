const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// 1. create an empty set
// 2. Create a set containing 0 to 10 using loop
// 3. Remove an element from a set
// 4. Clear a set
// 5. Create a set of 5 string elements from array
// 6. Create a map of countries and number of characters of a country

let emptySet = new Set()
console.log(emptySet)

for (let x = 0; x < 11; x++) {
    emptySet.add(x)
}
console.log(emptySet) //Set(11) [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, … ]

emptySet.delete(6)
console.log(emptySet) //Set(10) [ 0, 1, 2, 3, 4, 5, 7, 8, 9, 10 ]

emptySet.clear()
console.log(emptySet) //Set []

let randStrings = ['muazzam', 'meer', 'muazzy', 'meer', 'muhammad', 'soomro']
let setOf5StringElements = new Set(randStrings)
console.log(setOf5StringElements) //Set(5) [ "muazzam", "meer", "muazzy", "muhammad", "soomro" ]

let mapOfcountries = new Map()
console.log(mapOfcountries) //Map(0)

countries.forEach(country => mapOfcountries.set(country, country.length));
console.log(mapOfcountries) //Map(3) { Finland → 7, Sweden → 6, Norway → 6 }
