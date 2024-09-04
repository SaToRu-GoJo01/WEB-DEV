// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits);

fruits.set("Papaya", 5000);
console.log(fruits);


// The set() method can also be used to change existing Map values:
fruits.set("Papaya",50);
console.log(fruits);

console.log(fruits.get("Papaya"));

console.log(typeof fruits, typeof fruits.get("Papaya"));

console.log(fruits.size);

fruits.delete("Papaya");
console.log(fruits);

// fruits.clear("Papaya");
// console.log(fruits);

console.log(fruits.has("papaya"));

fruits.forEach((value,key) => console.log(key,value));

// List all keys
var text = "";
for (const x of fruits.keys()) {
  text += x + "<br>";
}
console.log(text);

//  List all values
var text = "";
for (const x of fruits.values()) {
  text += x + "  ";
}
console.log(text);






// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits1 = new Map();

// Add new Elements to the Map
fruits1.set(apples, 500);
fruits1.set(bananas, 300);
fruits1.set(oranges, 200);

console.log(fruits1);











// JavaScript Map.groupBy()
// ES2024 added the Map.groupBy() method to JavaScript.

// The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

// The Map.groupBy() method does not change the original object.

// Example
// Create an Array
var fruit = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = fruit.groupBy(fruit, myCallback);

console.log(result);