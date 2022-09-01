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

// example: 
const str3 = 'i am full of cash and full of water'
const withoutG = /full/
const withG = /full/g

//without g flag
console.log(str3.match(withoutG))
// without g flag it returned pattern, groups which is unidentified, index and input
// output
// 0: "full"
// groups: undefined
// index: 5
// input: "i am full of cash and full of water"
// length: 1

// with g flag
console.log(str3.match(withG))
// with g flag, it will simply return the array of matches.
// output:
// 0: "full"
// 1: "full"
// length: 2


// 3. search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
console.log(str3.search(withG)) //5 //it will return the index of the first match it finds 

console.log('this sentence will not contain the pattern'.search(withG)) //-1 cuz there is no match found, i.e there is no 'full' in this string


//Replacing a substring
// 4. replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

// example: 
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript') //with no flag
//only replaces the first match it finds
console.log(matchReplaced) //JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

// note: we can also include two or more patterns using a OR operator like this
// patternWithOR = /full|Full|FULL/g
//                           pattern to be replaced, replacement
matchReplacedWithG = txt.replace(/Python|python/g, 'JavaScript')
//this will replace all the matches from the whole text
console.log(matchReplacedWithG) //JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

//this will replace all the matches from the whole text, it is also case insensitive
matchReplacedWithGI = txt.replace(/python/gi, 'JavaScript')
//this will replace all the matches from the whole text
console.log(matchReplacedWithG) //JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language


// To remove % sign from a text

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

//replaces the % sign with empty string
matches = txt2.replace(/%/g, '')
console.log(matches) //I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.


//continue from Set of characters cheatsheat



// to add some set of characters: [starting range - end range]
// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9


// \: uses to escape special characters

// to match where the sring contains digits (numbers from 0 - 9)
// to match where the string does NOT contain digits

// . (any character except new line character (\n)  )  

// ^ (starts with) can be used as r'^full' , a sentence which starts with the word full
// r'[^abc] mean not a, not b, not c.


// $ (ends with),  r'substring$' eg r'love$', sentence ends with a word love


// *: zero or more times
// r'[a]*' means a optional or it can occur many times.

// +: one or more times
// r'[a]+' means at least once or more times

// ?: zero or one times
// r'[a]?' means zero times or once

// \b: word bounder, matches with the beginning or ending of a word


// {3}: Exactly 3 characters

// {3,}: At least 3 characters

// {3,8}: 3 to 8 characters

// |: Either or

// r'apple|banana' mean either of an apple or a banana

// (): Capture and group


// To learn more and to create different RegExp patterns for different use cases:
//  https://regex101.com/


//The main goal of using RegExp is to extract and clearn any kind of text to make some meaning out of it
