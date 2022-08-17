// console.log("im in babe");

// const TodaysDate = new Date();
// console.log(TodaysDate);
// console.log(TodaysDate.getFullYear()); //2022
// console.log(TodaysDate.getDate()); //16
// console.log(TodaysDate.getDay()); //Tuesday (2) #day of the week
// console.log(TodaysDate.getHours()); //23 (11pm)
// console.log(TodaysDate.getMinutes()); //38 (11:38)
// console.log(TodaysDate.getSeconds()); // 35 (11:38:35)

// var loru = parseInt('9.8'); //9
// console.log(loru); //9
// console.log(loru === 10); //false


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 //t
// 4 >= 3 t
// 4 < 3 f
// 4 <= 3 f
// 4 == 4 t
// 4 === 4 t
// 4 != 4 f
// 4 !== 4 f
// 4 != '4' f
// 4 == '4' t
// 4 === '4' f
// Find the length of python and jargon and make a falsy comparison statement.

// console.log("python".length !== "jargon".length); //false

// There is no 'on' in both dragon and python
//here match returns an array containing all matches.
// console.log("dragon".match('on')[0] !== "python".match('on')[0]); //false

// const allSeconds = Date.now() //


let time = new Date();
// console.log(allSeconds); //this will return number of seconds passed from January 1, 1970 to Now (i.e 17 aug, 2022 12:10 A.M)


// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05


//parse int actually removes the zero that is before any number.
// let randno = `060`;
// randno = parseInt(randno);
// console.log(randno);

// let zero = 0; 
// console.log(month.length); //this does not work cuz month is actually  a number
// if (month.toString().length === 1) {
//     month = `0${month}`;
//     // month = zero + month;
//     // month = parseInt(month); // if you do this then the added 0 will go away cuz the 0 we added is actually a String even if i add that 0 as a number actually.
//     // console.log(typeof (month)); //string

// }
// console.log(typeof (month)); //this is changed to string
// console.log(typeof (year)); //this still a number 

let day = format(time.getDate());
let hrs = format(time.getHours());
let mins = format(time.getMinutes());
let seconds = format(time.getSeconds());
let year = time.getFullYear();
let month = format(time.getMonth());

console.log(typeof (day));
console.log(typeof (year)); //this will be still a number cuz we did'nt input it in the format function.
console.log(typeof (month));

function format(number) {
    if (number.toString().length === 1) {
        return number = `0${number}`;
    }
    return number.toString(); //just so that all the return values have the same DataType.
}

// console.log({ 'i': year + "-" + month + "-" + day, 'ii': day + "-" + month + "-" + year, 'iii': day + "-" + month + "-" + year, });

console.log({
    'i': `${year}-${month}-${day}  ${hrs}:${mins}`,
    'ii': `${day}-${month}-${year}  ${hrs}:${mins}`,
    'iii': `${year}-${month}-${year}  ${hrs}:${mins}`,

});
console.log(`${year}-${month}-${day}  ${hrs}:${mins}`);