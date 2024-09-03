// declaring arrays as const has become a norm

// An array declared with const cannot be reassigned:
const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; //Errors
console.log(cars);

// Arrays are Not Constants
// The keyword const is a little misleading.
// It does NOT define a constant array. It defines a constant reference to an array.
// Because of this, we can still change the elements of a constant array.
// You can create a constant array:
const cars1 = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars1[0] = "Toyota";
// You can add an element:
cars1.push("Audi");
console.log(cars1);



// Assigned when Declared
// JavaScript const variables must be assigned a value when they are declared:
// Meaning: An array declared with const must be initialized when it is declared.
// Using const without initializing the array is a syntax error:
// Example
// This will not work:
// const cars2;
// cars2 = ["Saab", "Volvo", "BMW"];

// Arrays declared with var can be initialized at any time.
// You can even use the array before it is declared:
cars2 = ["Saab", "Volvo", "BMW"];
var cars2;
console.log(cars2);







// Const Block Scope
// An array declared with const has Block Scope.
// An array declared in a block is not the same as an array declared outside the block:
const cars3 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars3 = ["Toyota", "Volvo", "BMW", "Inside"];
  // Here cars[0] is "Toyota"
  console.log(cars3[0]);
}
// Here cars[0] is "Saab"
console.log(cars3);
// An array declared with var does not have block scope:
var cars4 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars4 = ["Toyota", "Volvo", "BMW"];
  console.log(cars4[0]);
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
console.log(cars4[0]);




