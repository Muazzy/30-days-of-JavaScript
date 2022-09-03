// 1.console.log()
console.log('hello world');
// document.write('hello this is a document.write method, which will show output on the browser viewport')

// console.log is used to show output on the browser
// note:  We can substitute values and also we can style the logging out put using % c.

// substituting some values
console.log('welcome %s %s your age is %d', 'muazzam', 'soomro', 20); //for string: %s, for number: %d, for adding css

console.log('%cwelcome %s %s your age is %d', 'color:green', 'muazzam', 'soomro', 20); //now this text will appear in green color

// 2. console.warn()
// We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.

console.warn('The package is deprecated')
console.warn('Warning is different from error')

// 3. console.error()
// The console.error() method shows an error messages.
console.error('Wrong syntax')
console.error('this is a error message')

// 4. console.table()
// The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

const arr = ['hello', 'muazzam', 'hi', 'Ana de Armas']
const obj = {
    name: 'Muazzam',
    university: 'MUET',
    country: 'Pakistan',
    proffession: 'SWE',
}

console.table(arr)

console.table(obj)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

// 5. console.time()
// Starts a timer you can use to track how long an operation takes.
// You give each timer a unique name, and may have up to 10, 000 timers running on a given page.
// When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.


console.time('regular for loop')

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][0])
}
console.timeEnd('regular for loop') //regular for loop: 1ms - timer ended

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')  //for of loop: 0ms - timer ended

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop') //forEach loop: 0ms - timer ended


// 6. console.info()
// It displays information message on browser console.
console.info('This is a reminder')

// 7. console.assert()
// The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

// 8. console.group
// The console.group() can help to group different log groups.

console.group('countries')
console.log(countries)
console.groupEnd() //countries 
// Array(3) [ (2) […], (2) […], (2) […] ]

console.group('random strings arr')
console.log(arr)
console.groupEnd()


// 9. console.count()
// It prints the number of times the console.count() is called. It takes a string label parameter. 
// It is very helpful to count the number of times a function is called.
// In the following example, the console.count() method will run three times

const func = () => {
    console.count('Function has been called')
}
func()
func()
func()

// output:
// Function has been called: 1 
// Function has been called: 2 
// Function has been called: 3

// 10.console.clear()
// The console.clear() cleans the browser console.

console.clear() //Console was cleared.