// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string characters to capital letters using toUpperCase() method
// Change all the string characters to lowercase letters using toLowerCase() method
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method
// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times


// Solutions: 
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 1));
console.log(challenge.substring(3, challenge.length));
console.log(challenge.includes("Script"));

console.log(challenge.split(""));  //if you wont give space it will split each character of the string even th blank spaces.
console.log(challenge.split(""));  //now it will split the whole string from where there is blank or empty space.

console.log(challenge.split("s")); //the letter (string) or the sequence you input here will be cut off from the resulting array and spliting the original array in two part (part before the splitting character/letter/string/sequence) + the part after it. 



let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(",")); //very useful function for converting this type of data into array.


console.log(challenge.replace("JavaScript", "Python")); // old val to new val, if you dont put new value, it will be replaced with 'undefined'.

console.log(challenge.charAt(15)); //S
console.log(challenge.indexOf("J")); //11
console.log(challenge.charCodeAt(11)); //74 //only input the index number.

console.log(challenge.indexOf("a")); //4
console.log(challenge.lastIndexOf("a")); //14


let sentence = `You cannot end a sentence with because because because is a conjunction`;
console.log(sentence.indexOf("because")); //31
console.log(sentence.lastIndexOf("because")); //47
console.log(sentence.search("because")); //31


let toBeTrimed = `    Why this sentence has so many spaces     `;
console.log(toBeTrimed);
console.log(toBeTrimed.trim());


// string used "30 Days Of JavaScript";
console.log(challenge.startsWith(3)); //true
console.log(challenge.startsWith(30)); //true
console.log(challenge.startsWith("days")); //false

console.log(challenge.endsWith("t")); //true
console.log(challenge.endsWith("script")); //false //it is also case sensitive.
console.log(challenge.endsWith("Script")); //true
console.log(challenge.endsWith("Of JavaScript")); //true 


//match function
console.log(challenge.match("a")); //this will only return the first 'a' that it will find
console.log(challenge.match("a").index); //4  //the index of the very first 'a' in the string
console.log(challenge.match("b")); //null, cuz there is no b in the string 

console.log(challenge.match(/a/g)); //here g means search in the whole string for all the a's, we will use g when we want to get all the matches of a.

console.log(challenge.match(/a/gi)); //it is the same as the above but here the additional i means it is case sensitive meaning it will only match and find the lower case a's.

// concatinating
let pt1 = `30 Days Of `;
let pt2 = `JavaScript`;

console.log(pt1.concat(pt2));

//repeating 
console.log(challenge.repeat(2)); //without spacing

console.log(`${challenge} `.repeat(2));



//Exercise Level 2 



//Exercise Level 3