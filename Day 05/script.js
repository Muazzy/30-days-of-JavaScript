// let names = ['muazzy', 'muazzam', 'sooomro', 'ana de armas'];

// console.log('names:', names);  // names: Array(4) [ "muazzy", "muazzam", "sooomro", "ana de armas" ]
// console.log(`names: ${names}`);  // names: muazzy,muazzam,sooomro,ana de armas

// //array length
// console.log(names.length);

// const varToString = varObj => Object.keys(varObj)[0]; //this will return the name of the variable

// console.log(`Number of ${varToString({ names })}: ${names.length}`);

// let arrayOfArrays = [[1, 2, 3, 4], [2, 3], [1, 4]];

// // console.log(`Number of ${varToString({ arrayOfArrays })}: ${arrayOfArrays.length}, Which are ${arrayOfArrays[0]}  ${arrayOfArrays[1]}  ${arrayOfArrays[2]}`);


// // to get the name of the variable: 
// var varName = varToString({ names }); //{curly brackets} cuz we pass the names as an object.

// console.log(`Number of ${varToString({ arrayOfArrays })}: ${arrayOfArrays.length}, Which are ${arrayOfArrays}`); //this will print out name, length of Array and all its elements without seperating indexes

// // An Array can have different data types:
// let diffDataTypes = [
//     'string',
//     69,
//     true,
//     false,
//     { map: 'key', country: 'pakistan' },
//     { skills: ['flutter', 'html', 'css', 'js'] },
//     ['1', 1, 2],
// ];

// console.log(diffDataTypes);

// // creating an array using split
// let word = 'word';
// let wordArr = word.split('');
// console.log(wordArr); //[ "w", "o", "r", "d" ]

// let sentence = 'this is a sentence';
// let sentenceArr = sentence.split(' ');
// console.log(sentenceArr); //[ "this", "is", "a", "sentence" ]

// let manyWords = 'muazzam, Ele, Soomro, Google, SWE';
// let manyWordsArr = manyWords.split(',');
// console.log(manyWordsArr); //[ "muazzam", " Ele", " Soomro", " Google", " SWE" ]

// // getting lastIndex of an Array 
// let lastIndex = manyWordsArr.length - 1;
// console.log(lastIndex);
// console.log(manyWordsArr[lastIndex]);


// //Modifying array Elements
// // An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

// //this is how you can modify an array element 
// manyWordsArr[lastIndex] = 'Software Engineer'; //chnaged from SWE --> Software Engineer
// console.log(manyWordsArr);
// //you can also change any element to a diff data type
// manyWordsArr[lastIndex] = 69;
// console.log(manyWordsArr);

// manyWordsArr[lastIndex] = [69, 'SWE', 'Software Engineer'];
// console.log(manyWordsArr);

// manyWordsArr[lastIndex] = { 'lastIndex': 'SWE' }; //here 'lastIndex' and lastIndex wont make a difference.
// console.log(manyWordsArr);


// //Methods to manipulate Array

// // Array constructor
// const constructorArray = Array();
// console.log(constructorArray);

// const arrWithFiveEmptyValues = Array(5);
// console.log(arrWithFiveEmptyValues);  //Array(5) [ <5 empty slots> ]

// //however the arrays are of not fixed length even if you initialize them with 'x' number of values . see the example below
// arrWithFiveEmptyValues.push('');
// console.log(arrWithFiveEmptyValues); //Array(6) [ <5 empty slots>, "" ] //5 empty values and one empty string.

// arrWithFiveEmptyValues[0] = '';
// console.log(arrWithFiveEmptyValues); //Array(6) [ "", <4 empty slots>, "" ]

// // Creating an array of same or static values using fill
// const muazzamFourTimes = Array(4).fill('muazzam');
// console.log(muazzamFourTimes); //Array(4) [ "muazzam", "muazzam", "muazzam", "muazzam" ]

// //adding or concatinating two arrays
// let bigArr = manyWordsArr.concat(muazzamFourTimes);
// console.log(bigArr);  //Array(9) [ "muazzam", " Ele", " Soomro", " Google", {???}, "muazzam", "muazzam", "muazzam", "muazzam" ]


// //getting index of an element in an array
// //indexOf:To check if an item exist in an array. If it exists it returns the index(>=0) else it returns -1.

// console.log(muazzamFourTimes.indexOf('muazzam')); //since there are more than one same elements in the array, it will give the index of the first same element i.e it is 0 in this case.

// console.log(muazzamFourTimes.indexOf('muazzy')); //-1, cuz no element 'muazzy' exist in the array.

// // Getting last index of an element in array
// console.log(muazzamFourTimes.lastIndexOf('muazzam')); //3 

// // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

// console.log(muazzamFourTimes.includes('muazzam')); //true
// console.log(muazzamFourTimes.includes('muazzy')); //false

// // Checking Array
// // Array.isArray:To check if the data type is an array
// console.log(Array.isArray(muazzamFourTimes)) //true.
// console.log(Array.isArray('muazzam')) //false
// console.log(Array.isArray(muazzamFourTimes[0])); //false cuz at index 0 its is an string 
// let str = 'muazzy';
// console.log(Array.isArray(str)); //false
// console.log(Array.isArray(str.split(''))); //true cuz the string will be converted into an array.

// //converting array to string
// console.log(muazzamFourTimes.toString()) //muazzam,muazzam,muazzam,muazzam
// console.log(typeof (muazzamFourTimes.toString())) //string

// // Joining array elements
// // join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// console.log(muazzamFourTimes.join()) //muazzam,muazzam,muazzam,muazzam
// console.log(muazzamFourTimes.join('')) //muazzammuazzammuazzammuazzam
// console.log(muazzamFourTimes.join(' ')) //muazzam muazzam muazzam muazzam
// console.log(muazzamFourTimes.join(',')) //muazzam,muazzam,muazzam,muazzam
// console.log(muazzamFourTimes.join(' , ')) //muazzam , muazzam , muazzam , muazzam
// console.log(muazzamFourTimes.join(' # ')) //muazzam # muazzam # muazzam # muazzam



// // Slice array elements
// // Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// const evenNums = [2, 4, 6, 8, 10];
// console.log(evenNums.slice()) //defualtly it will copy and slice all the array elements.
// console.log(evenNums.slice(0)) //as only starting index is given so it will also copy the whole array
// console.log(evenNums.slice(0, evenNums.length - 1))// it also copies all the items 
// console.log(evenNums.slice(1, 3)); //[4,6]

// //Splice Method in arrays 
// // Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// // Adding item to an array using push
// // Push
// // const numbers = [1, 2, 3, 4, 5]
// // numbers.push(6)
// // console.log(numbers) // -> [1,2,3,4,5,6]

// // numbers.pop() // -> remove one item from the end
// // console.log(numbers) // -> [1,2,3,4,5]

// // Add an element from the beginning
// // unshift: Adding array element in the beginning of the array.
// // const numbers = [1, 2, 3, 4, 5]
// // numbers.unshift(0) // -> add one item from the beginning
// // console.log(numbers) // -> [0,1,2,3,4,5]

// // Removing the end element using pop
// // const numbers = [1, 2, 3, 4, 5]
// // numbers.pop() // -> remove one item from the end
// // console.log(numbers) // -> [1,2,3,4]


// // Removing an element from the beginning
// // shift: Removing one array element in the beginning of the array.
// // const numbers = [1, 2, 3, 4, 5]
// // numbers.shift() // -> remove one item from the beginning
// // console.log(numbers) // -> [2,3,4,5]


// //reversing the order of an array
// const naturalNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(naturalNums.reverse()); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

// const randomNouns = ['muazzam', 'black swan', 'muazzam afaque', 'muazzam soomro', 'ali', 'faizan', 'bar', 'book'];
// console.log(randomNouns.reverse()); // [ "book", "bar", "faizan", "ali", "muazzam soomro", "muazzam afaque", "black swan", "muazzam" ]

// let randomNums = [5, 3, 67, 89, 69, 54, 76, 6, 69, 100, 114, 2000, 2456, 754];

// //sorting elements in a array
// // sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

// console.log(randomNouns.sort()); // [ "ali", "bar", "black swan", "book", "faizan", "muazzam", "muazzam afaque", "muazzam soomro" ]

// // to make it in decending order we can reverse it after sorting
// console.log(randomNouns.sort().reverse());  // [ "muazzam soomro", "muazzam afaque", "muazzam", "faizan", "book", "black swan", "bar", "ali" ]

// console.log(randomNums.sort()); //you cannot sort number apperently. cuz the sort function is handling the values as strings.

// // *********** This is the reason *****************
// // The reason why the sort function behaves so weird
// // From the documentation:

// // [...] the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
// // ************************************************

// // Conclusion:

// // sort() does sorting by only looking at the first index of the numbers. sort() does not care if a whole number is bigger than another, it compares the value of the unicode of the digits, and if there are two equal unicode values, then it checks if there is a next digit and compares it as well.

// // To sort correctly, you have to pass a compare function to sort() like explained here.



// //there are two ways to sort a number-array

// // 1. either you explicitely initialize you number array as Float64Array and then apply sort 
// // like this:
// let expArray = new Float64Array([5, 3, 67, 89, 69, 54, 76, 6, 69, 100, 114, 2000, 2456, 754]); //[ 3, 5, 6, 54, 67, 69, 69, 76, 89, 100, 114, 754, 2000, 2456]
// console.log(expArray.sort());

// // for reversing 
// console.log(expArray.sort().reverse()); //[ 2456, 2000, 754, 114, 100, 89, 76, 69, 69, 67, 54, 6, 5, 3 ]


// //2. or you can add a new method which handles numeric sorts 

// // randomNums = randomNums.sort(function (a, b) { return a - b; });
// // console.log(randomNums); //[ 3, 5, 6, 54, 67, 69, 69, 76, 89, 100, 114, 754, 2000, 2456]

// // //for reversing 
// // randomNums = randomNums.sort((a, b) => b - a);
// // console.log(randomNums);  //[ 2456, 2000, 754, 114, 100, 89, 76, 69, 69, 67, 54, 6, 5, 3 ]

// // Arrays of Arrays 
// // Array can store different data types including an array itself. Let us create an array of arrays
// // const arrayCanStoreArrays = [['first child'], ['second child']];

// // console.log(arrayCanStoreArrays); //Array [ (1) [???], (1) [???] ]    0: Array [ "first child" 1: Array [ "second child" ]

const arr = [1, 2, 3, 4, 5];

const arr2 = [1, 2, 4, 5, 6, 7];

function getMiddle(arr) {

    let middleChild = (arr.length - 1) / 2; //if -1 not add after arr.length it will return the upper Middle bound of an even array., but odd array would be fine tho.
    return middleChild = Math.floor(middleChild);
}



function printMiddleWithSlice(array) {

    array.length % 2 === 0 ? console.log(array.slice(getMiddle(array), getMiddle(array) + 2)) : console.log(array.slice(getMiddle(array), getMiddle(array) + 1));

}

//have to check out splice more
// function printMiddleWithSplice(array) {

//     array.length % 2 === 0 ? console.log(array.splice(getMiddle(array), getMiddle(array) + 2, 0)) : console.log(array.splice(getMiddle(array), getMiddle(array) + 1, 0));

// }

printMiddleWithSlice(arr);
printMiddleWithSlice(arr2);

// console.log('space');

// printMiddleWithSplice(arr);
// printMiddleWithSplice(arr2);


let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
printMiddleWithSlice(itCompanies);

console.log(`first value: ${itCompanies[0]}`);
console.log(`middle value: ${itCompanies[getMiddle(itCompanies)]}`);
console.log(`last value: ${itCompanies[itCompanies.length - 1]}`);

itCompanies.forEach(element => {
    console.log(`company name: ${element}`);
});

itCompanies.forEach(element => {
    console.log(`UPPERCASE company name: ${element.toUpperCase()}`);
});

console.log(`${itCompanies.join(', ').toString()} are big IT companies.`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

function doesExist(array, company) {
    array.indexOf(company) == -1 ? console.log(`it does not exist in this array`) : console.log(`${company} exists at index ${array.indexOf(company)}`);
}
doesExist(itCompanies, 'microsoft');


itCompanies.forEach(element => {
    let firstO = element.indexOf('o'); //index of the first o it finds
    let secondO = element.lastIndexOf('o'); // index of last o it finds

    firstO !== secondO && firstO !== -1 // if the index of first o and last o are different && that index is not -1 (i.e the character does exists in the string) than print out the element to console.
        ? console.log(element) : console.log();
});

// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())

//console.log(itCompanies.slice(0, 3)); //[ "Facebook", "Google", "Microsoft" ]

// last three elements of the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length)) //[ "Apple", "IBM", "Oracle" ]

//remove all the IT companies 
// console.log(itCompanies.splice(itCompanies.length))

