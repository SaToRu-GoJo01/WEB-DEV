// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  var {firstName, lastName} = person;
  console.log(firstName,lastName);

  var {lastName, firstName} = person;
  console.log(lastName,firstName);

var {firstName, lastName, country = "US"} = person;
console.log(firstName,lastName,country);



// Object Property Alias
var {lastName : name} = person;
console.log(name);



// string Destructuring
var name = "W3Schools";
var [a1,a2,a3,a4,a5] = name;
console.log(a1,a2,a3,a4,a5);


// Array Destructuring
var fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
var [fruit1, fruit2] = fruits;
console.log(fruit1,fruit2);

// Skipping Array Values
// We can skip array values using two or more commas:
var [fruit1,,,fruit2] = fruits;
console.log(fruit1,fruit2);


// Array Position Values
// We can pick up values from specific index locations of an array:
var {[0]:fruit1,[2]:fruit2} = fruits;
console.log(fruit1 ,fruit2);


// The Rest Property
// You can end a destructuring syntax with a rest property.
// This syntax will store all remaining values into a new array:
var numbers = [10,20,30,40,50,60,70];
var [a,b,...rest] = numbers;
console.log(a,b,rest);


// Destructuring Maps
var fruits = new Map([
  ["apples",500],
  ["bananas",300],
  ["oranges",200]
]);
var text = "";
for (const [key,value] of fruits){
  text += key + " is " + value + "\n";
}
console.log(text);

