// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is not nullish (null or undefined).

// Otherwise it returns the second argument.
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);