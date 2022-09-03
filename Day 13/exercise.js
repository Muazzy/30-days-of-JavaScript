// level 1
// Display the countries array as a table
// Display the countries object as a table
// Use console.group() to group logs

// console.table(countries)

countries.forEach(element => {
    console.table(element)
});

console.group('countries array')
console.table(countries)
console.groupEnd()


// Level 2
// 10 > 2 * 10 use console.assert()
// Write a warning message using console.warn()
// Write an error message using console.error()

console.assert(10 > 2 * 10, '10 is greater than 2*10')
console.warn('ye mear area hai')
console.error('null value cant be assigned to type String')


// Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
console.time('while loop')
let i = 0;
while (i < countries.length) {
    console.log(countries[i])
    i++;
}
console.timeEnd('while loop') //while loop: 40ms - timer ended


console.time('for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}
console.timeEnd('for loop') //for loop: 39ms - timer ended


console.time('for of')
for (let country of countries) {
    console.log(country)
}
console.timeEnd('for of') //for of: 37ms - timer ended


console.time('for each')
countries.forEach(country => {
    console.log(country)
});
console.timeEnd('for each') //for each: 42ms - timer ended