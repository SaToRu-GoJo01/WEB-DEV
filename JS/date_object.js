const d = new Date();
console.log(d);

const d1 = new Date("2022-03-25");
console.log(d1);

// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.

// new Date(year,month,day,hours,minutes,seconds,ms)

const d2 = new Date("October 13, 2014 11:13:00");
console.log(d2);




// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.
// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
const d3 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d3);

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const d4 = new Date(2018, 5, 35, 10, 33, 30)
console.log(d4);




// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const d5 = new Date(2018);
console.log(d5);



// One and two digit years will be interpreted as 19xx:
const d6 = new Date(9, 11, 24);
console.log(d6);




// JavaScript stores dates as number of milliseconds since January 01, 1970.
// Zero time is January 01, 1970 00:00:00 UTC.
// One day (24 hours) is 86 400 000 milliseconds.
// Now the time is: 1725240653803 milliseconds past January 01, 1970

// January 01 1970 minus 100 000 000 000 milliseconds is:
const d7 = new Date(-100000000000);
console.log(d7);

// January 01 1970 plus 24 hours is:
const d8 = new Date(24 * 60 * 60 * 1000);
// or
const d9 = new Date(86400000);
console.log(d8,d9);





// Date Methods

// JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:
const d10 = new Date();
console.log(d10);
// more readable format
console.log(d10.toString());
// even more readable format and also shows only the day and the date
console.log(d10.toDateString());
// shows the UTC format of the date
console.log(d10.toUTCString());
// converts a date to a string using the ISO standards
console.log(d10.toISOString());
