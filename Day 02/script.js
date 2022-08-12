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
// let challenge = "30 Days Of JavaScript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0, 1));
// console.log(challenge.substring(3, challenge.length));
// console.log(challenge.includes("Script"));

// console.log(challenge.split(""));  //if you wont give space it will split each character of the string even th blank spaces.
// console.log(challenge.split(""));  //now it will split the whole string from where there is blank or empty space.

// console.log(challenge.split("s")); //the letter (string) or the sequence you input here will be cut off from the resulting array and spliting the original array in two part (part before the splitting character/letter/string/sequence) + the part after it. 



// let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(companies.split(",")); //very useful function for converting this type of data into array.


// console.log(challenge.replace("JavaScript", "Python")); // old val to new val, if you dont put new value, it will be replaced with 'undefined'.

// console.log(challenge.charAt(15)); //S
// console.log(challenge.indexOf("J")); //11
// console.log(challenge.charCodeAt(11)); //74 //only input the index number.

// console.log(challenge.indexOf("a")); //4
// console.log(challenge.lastIndexOf("a")); //14


// let sentence = `You cannot end a sentence with because because because is a conjunction`;
// console.log(sentence.indexOf("because")); //31
// console.log(sentence.lastIndexOf("because")); //47
// console.log(sentence.search("because")); //31


// let toBeTrimed = `    Why this sentence has so many spaces     `;
// console.log(toBeTrimed);
// console.log(toBeTrimed.trim());


// // string used "30 Days Of JavaScript";
// console.log(challenge.startsWith(3)); //true
// console.log(challenge.startsWith(30)); //true
// console.log(challenge.startsWith("days")); //false

// console.log(challenge.endsWith("t")); //true
// console.log(challenge.endsWith("script")); //false //it is also case sensitive.
// console.log(challenge.endsWith("Script")); //true
// console.log(challenge.endsWith("Of JavaScript")); //true 


// //match function
// console.log(challenge.match("a")); //this will only return the first 'a' that it will find
// console.log(challenge.match("a").index); //4  //the index of the very first 'a' in the string
// console.log(challenge.match("b")); //null, cuz there is no b in the string 

// console.log(challenge.match(/a/g)); //here g means search in the whole string for all the a's, we will use g when we want to get all the matches of a.

// console.log(challenge.match(/a/gi)); //it is the same as the above but here the additional i means it is case sensitive meaning it will only match and find the lower case a's.

// // concatinating
// let pt1 = `30 Days Of `;
// let pt2 = `JavaScript`;

// console.log(pt1.concat(pt2));

// //repeating 
// console.log(challenge.repeat(2)); //without spacing

// console.log(`${challenge} `.repeat(2));



// *********************************************************************************************************************

//Exercise Level 2 

// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.

// Generate a random number between 50 and 100 inclusively.

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.

// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.

// Generate a random number between 50 and 100 inclusively.

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.

// console.log('\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

// console.log(
//     "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// console.log(parseFloat(9.8) === 10);
// console.log(Math.round(9.8));


// let py = "python";
// let jg = "jargon";

// console.log(py.includes("on"));
// console.log(jg.includes("on"));

// let jg_sentence = "I hope this course is not full of jargon. Check if jargon is in the sentence.";
// console.log(jg_sentence.includes("jargon"));

// let rand = Math.random();
// let zeroTo100 = Math.floor(rand * 101); //0-100
// let fiftyTo100 = Math.floor((rand * 51) + 50); // for 50-100 we know that the output should be from 51 numbers i.e bw 50-100 (inclusive), and after that as we know we have to skip the first 50 numbers so we add it in the last
// let zeroTo225 = Math.floor(rand * 226);

// console.log(zeroTo225);

// let js = "JavaScript";
// let randomAcessofJs = Math.floor(rand * js.length);
// console.log(js.charAt(randomAcessofJs));

// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n");

// let bcSentence = 'You cannot end a sentence with because because because is a conjunction';
// let newString = bcSentence.substr(bcSentence.indexOf("because"), ("because".length + 1) * 3); //*3 cuz there are three because in the sentence and that extra +1 is for the space in bw the words.
// console.log(newString);

//Exercise Level 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let luvSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

luvArr = luvSentence.match(/love/gi); //this will return a array containing all the matches.
let noOfLoves = luvArr.length;
// console.log(noOfLoves);


let bcsSentence = 'You cannot end a sentence with because because because is a conjunction';
// console.log(bcsSentence.match(/because/gi).length); //same thing we did above but in a shorter way.

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanedSentence = sentence.replace(/%|\$|@|%|&|!|\?|#/g, ""); //the enclosing and closing "//" brackets are to input a sequence and we have used a "\" back-slash with $ and ? cuz we cant use them in sentences directly otherwise. and most importantly | is OR to find multiple characters. these sentences or text enclosed bw / / are called regular expressions.

let moreCleaned = cleanedSentence.replace(/\.|,|;/g, ""); // backslash used with . (dot)
// console.log(moreCleaned);


let wordsArr = moreCleaned.split(" ");
console.log(wordsArr);

function getUniqueWords(wordArray) {
    let arr = []; //initializing empty array for storing unique words
    for (let i = 0; i < wordArray.length; i++) //itterating thru the inputted array for finding the unique words
    {
        if (!arr.includes(wordArray[i])) // if the word is not already there (in the array)
        {
            arr.push(wordArray[i]); //then push it
        }
    }
    return arr; //lastly return the array.
}

let uniqueWords = getUniqueWords(wordsArr);
// console.log(uniqueWords);


//this function takes two arrays, an array with complete set of words, and another array only with the unique words of the first array
function findTheHoe(uniqueWords, wordsArr) {
    let maxCount = 0; // counter for most used woro
    let mostUsedWrod = '';
    //itterating thru the uniqueWords array to find its matching pairs in the Array that has all the words.
    for (let uniqueWord in uniqueWords) //same as: for(let uniqueWord=0; uniqueWord<uniqueWords.length; uniqueWord++)
    {
        let count = 0; //setting new counter for each word.

        //now itterating thru the first array which has all the words to find the matching words for each unique word.
        for (let word in wordsArr) //same as: for(let word=0; word<wordsArr.length; word++)
        {
            if (wordsArr[word] == uniqueWords[uniqueWord]) //checking whether the word in the array with all words has the same word as the current unique word
            {
                count++; //then incrementing the count for that particular word
            }
        }

        if (count > maxCount) //if the current word has the highest count
        {
            maxCount = count;
            mostUsedWrod = uniqueWords[uniqueWord];
        }
    }

    return `${mostUsedWrod} is used for ${maxCount} times`; //lastly returning the most used word based on the higher count 
}


let mostWantedHoe = findTheHoe(uniqueWords, wordsArr);
console.log(mostWantedHoe);


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let expression = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

console.log(expression);

// let diffIncomes = expression.match(/^\d+$/g); //not working, dont know why haha.
let diffIncomes = expression.match(/\d+/g); //this will match all the numbers in the string and return us a array of that numbers.
console.log(diffIncomes);

let regularSalary = parseInt(diffIncomes[0]);
let anualBonus = parseInt(diffIncomes[1]);
let onlineCourseSalary = parseInt(diffIncomes[2]);

let totalAnualIncome = (regularSalary * 12) + anualBonus + (onlineCourseSalary * 12);
console.log(totalAnualIncome);


//finally done with data types (DAY 02).