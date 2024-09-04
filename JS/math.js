//  math object is static so you can use it directly without creating Math() object first
// The syntax for any Math property is : Math.property.
console.log(Math.PI);

console.log(Math.E,        // returns Euler's number
    Math.PI,       // returns PI
    Math.SQRT2,    // returns the square root of 2
    Math.SQRT1_2,  // returns the square root of 1/2
    Math.LN2,      // returns the natural logarithm of 2
    Math.LN10,     // returns the natural logarithm of 10
    Math.LOG2E,    // returns base 2 logarithm of E
    Math.LOG10E)

console.log(Math.round(4.02),Math.floor(4.02),Math.ceil(4.02),Math.trunc(-4.02),Math.sign(-4));
// #Math.trunc() returns the integer part of the number
// Math.sign() returns -1 for negative, 1 for positive, 0 for zero

console.log(Math.pow(8,2),Math.sqrt(64),Math.abs(-4.7));


console.log(Math.sin(90 * Math.PI / 180),Math.cos(0 * Math.PI / 180),Math.tan(0));


console.log(Math.max(0, 150, 30, 20, -8, -200),Math.min(0, 150, 30, 20, -8, -200));


console.log(Math.random()); // Generates 0 to 1(exclusive) random values

console.log(Math.log(1),Math.log(10),Math.log2(8),Math.log10(1000));
