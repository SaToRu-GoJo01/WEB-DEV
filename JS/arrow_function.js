let myFunction = (a, b) => a * b;
console.log(myFunction(10,34));


hello = () => {
    return "Hello World!";
}

console.log(hello());


hello = () => "Hello World!";
// Note: This works only if the function has only one statement.
console.log(hello());

// with parameter
hello = (val) => "Hello " + val;
console.log(hello("LSKDJF"));