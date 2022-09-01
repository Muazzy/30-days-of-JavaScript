// Parameters of the regex
// let regExpPattern = new RegExp(pattern, flag) //pattern:String, flag: a flag or a combination of flags

// for example: 
let pattern = 'hate'
let flag = 'gi' //g: global & i: case insensitive


// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
let regex = new RegExp('anyword', 'gim') //global, case insensitive, multiline


// creating a RegExp without its constructor
//         pattern, flag
let regexWO = /full/gi;


// here are some of the RegExp methods

// 1. to test a pattern, i.e testing for a match
// test(), Tests for a match in a string, it returns a boolean i.e true or false

// example: 

const str = 'i am full of cash'
const str2 = 'i am fUlL of cash'
const pattern1 = /full/g;

//       regex, string that you want to test
console.log(pattern1.test(str)); //true
console.log(pattern1.test(str2)); //false, cuz the we did'nt add a case insensitive flag


//Array containing all of the match
// 2. match(): Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
