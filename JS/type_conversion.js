console.log(Number("3.14"),
Number(Math.PI),
Number(" "),
Number(""),
Number("99 88"),
Number("John"));


// The Unary + Operator
// The unary + operator can be used to convert a variable to a number:

// Example
let y = "5";      // y is a string
let x = + y;      // x is a number
console.log(typeof x);






// Converting Numbers to Strings
// The global method String() can convert numbers to strings.

// It can be used on any type of numbers, literals, variables, or expressions:

// Example
console.log(String(x));         // returns a string from a number variable x
console.log(String(123) );      // returns a string from a number literal 123
console.log(String(100 + 23));  // returns a string from a number from an expression