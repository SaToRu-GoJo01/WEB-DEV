const d = new Date();
console.log(d);


// Method	            Description
// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)


console.log(d.getFullYear());
console.log(d.getMonth()); //0-11
console.log(d.getDate()); //1-31
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay()); //0-6
console.log(d.getTime());
console.log(Date.now());