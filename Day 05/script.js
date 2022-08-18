let names = ['muazzy', 'muazzam', 'sooomro', 'ana de armas'];

console.log('names:', names);  // names: Array(4) [ "muazzy", "muazzam", "sooomro", "ana de armas" ]
console.log(`names: ${names}`);  // names: muazzy,muazzam,sooomro,ana de armas

//array length
console.log(names.length);

const varToString = varObj => Object.keys(varObj)[0]; //this will return the name of the variable

console.log(`Number of ${varToString({ names })}: ${names.length}`);

let arrayOfArrays = [[1, 2, 3, 4], [2, 3], [1, 4]];

// console.log(`Number of ${varToString({ arrayOfArrays })}: ${arrayOfArrays.length}, Which are ${arrayOfArrays[0]}  ${arrayOfArrays[1]}  ${arrayOfArrays[2]}`);


// to get the name of the variable: 
var varName = varToString({ names }); //{curly brackets} cuz we pass the names as an object.

console.log(`Number of ${varToString({ arrayOfArrays })}: ${arrayOfArrays.length}, Which are ${arrayOfArrays}`); //this will print out name, length of Array and all its elements without seperating indexes

// An Array can have different data types:
let diffDataTypes = [
    'string',
    69,
    true,
    false,
    { map: 'key', country: 'pakistan' },
    { skills: ['flutter', 'html', 'css', 'js'] },
    ['1', 1, 2],
];

console.log(diffDataTypes);

// creating an array using split
let word = 'word';
let wordArr = word.split('');
console.log(wordArr); //[ "w", "o", "r", "d" ]

let sentence = 'this is a sentence';
let sentenceArr = sentence.split(' ');
console.log(sentenceArr); //[ "this", "is", "a", "sentence" ]

let manyWords = 'muazzam, Ele, Soomro, Google, SWE';
let manyWordsArr = manyWords.split(',');
console.log(manyWordsArr); //[ "muazzam", " Ele", " Soomro", " Google", " SWE" ]

// getting lastIndex of an Array 
let lastIndex = manyWordsArr.length - 1;
console.log(lastIndex);
console.log(manyWordsArr[lastIndex]);


//Modifying array Elements
// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

//this is how you can modify an array element 
manyWordsArr[lastIndex] = 'Software Engineer'; //chnaged from SWE --> Software Engineer
console.log(manyWordsArr);
//you can also change any element to a diff data type
manyWordsArr[lastIndex] = 69;
console.log(manyWordsArr);

manyWordsArr[lastIndex] = [69, 'SWE', 'Software Engineer'];
console.log(manyWordsArr);

manyWordsArr[lastIndex] = { 'lastIndex': 'SWE' }; //here 'lastIndex' and lastIndex wont make a difference.
console.log(manyWordsArr);


//Methods to manipulate Array

// Array constructor
const constructorArray = Array();
console.log(constructorArray);

const arrWithFiveEmptyValues = Array(5);
console.log(arrWithFiveEmptyValues);  //Array(5) [ <5 empty slots> ]

//however the arrays are of not fixed length even if you initialize them with 'x' number of values . see the example below
arrWithFiveEmptyValues.push('');
console.log(arrWithFiveEmptyValues); //Array(6) [ <5 empty slots>, "" ] //5 empty values and one empty string.

arrWithFiveEmptyValues[0] = '';
console.log(arrWithFiveEmptyValues); //Array(6) [ "", <4 empty slots>, "" ]

// Creating an array of same or static values using fill
const muazzamFourTimes = Array(4).fill('muazzam');
console.log(muazzamFourTimes); //Array(4) [ "muazzam", "muazzam", "muazzam", "muazzam" ]

//adding or concatinating two arrays
let bigArr = manyWordsArr.concat(muazzamFourTimes);
console.log(bigArr);  //Array(9) [ "muazzam", " Ele", " Soomro", " Google", {…}, "muazzam", "muazzam", "muazzam", "muazzam" ]


//getting index of an element in an array
//indexOf:To check if an item exist in an array. If it exists it returns the index(>=0) else it returns -1.

console.log(muazzamFourTimes.indexOf('muazzam')); //since there are more than one same elements in the array, it will give the index of the first same element i.e it is 0 in this case.

console.log(muazzamFourTimes.indexOf('muazzy')); //-1, cuz no element 'muazzy' exist in the array.

// Getting last index of an element in array
console.log(muazzamFourTimes.lastIndexOf('muazzam')); //3 

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

console.log(muazzamFourTimes.includes('muazzam')); //true
console.log(muazzamFourTimes.includes('muazzy')); //false

// Checking Array
// Array.isArray:To check if the data type is an array
console.log(Array.isArray(muazzamFourTimes)) //true.
console.log(Array.isArray('muazzam')) //false
console.log(Array.isArray(muazzamFourTimes[0])); //false cuz at index 0 its is an string 
let str = 'muazzy';
console.log(Array.isArray(str)); //false
console.log(Array.isArray(str.split(''))); //true cuz the string will be converted into an array.

//converting array to string
console.log(muazzamFourTimes.toString()) //muazzam,muazzam,muazzam,muazzam
console.log(typeof (muazzamFourTimes.toString())) //string

// Joining array elements
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

console.log(muazzamFourTimes.join()) //muazzam,muazzam,muazzam,muazzam
console.log(muazzamFourTimes.join('')) //muazzammuazzammuazzammuazzam
console.log(muazzamFourTimes.join(' ')) //muazzam muazzam muazzam muazzam
console.log(muazzamFourTimes.join(',')) //muazzam,muazzam,muazzam,muazzam
console.log(muazzamFourTimes.join(' , ')) //muazzam , muazzam , muazzam , muazzam
console.log(muazzamFourTimes.join(' # ')) //muazzam # muazzam # muazzam # muazzam



// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.slice()) //defualtly it will copy and slice all the array elements.
console.log(evenNums.slice(0)) //as only starting index is given so it will also copy the whole array
console.log(evenNums.slice(0, evenNums.length - 1))// it also copies all the items 
console.log(evenNums.slice(1, 3)); //[4,6]

//Splice Method in arrays 
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// Adding item to an array using push
// Push
// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]

// Add an element from the beginning
// unshift: Adding array element in the beginning of the array.
// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]

// Removing the end element using pop
// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4]


// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.
// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]


//reversing the order of an array
const naturalNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(naturalNums.reverse()); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

const randomNouns = ['muazzam', 'black swan', 'muazzam afaque', 'muazzam soomro', 'ali', 'faizan', 'bar', 'book'];
console.log(randomNouns.reverse()); // [ "book", "bar", "faizan", "ali", "muazzam soomro", "muazzam afaque", "black swan", "muazzam" ]

const randomNums = [5, 3, 67, 89, 69, 54, 76, 6, 69, 100, 114, 2000, 2456, 754];

//sorting elements in a array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

console.log(randomNouns.sort()); // [ "ali", "bar", "black swan", "book", "faizan", "muazzam", "muazzam afaque", "muazzam soomro" ]

// to make it in decending order we can reverse it after sorting
console.log(randomNouns.sort().reverse());  // [ "muazzam soomro", "muazzam afaque", "muazzam", "faizan", "book", "black swan", "bar", "ali" ]

console.log(randomNums.sort()); //you cannot sort number apperently. cuz the sort function is handling the values as strings.

// *********** This is the reason *****************
// The reason why the sort function behaves so weird
// From the documentation:

// [...] the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
// ************************************************

// Conclusion:

// sort() does sorting by only looking at the first index of the numbers. sort() does not care if a whole number is bigger than another, it compares the value of the unicode of the digits, and if there are two equal unicode values, then it checks if there is a next digit and compares it as well.

// To sort correctly, you have to pass a compare function to sort() like explained here.



//there are two ways to sort a number arrays