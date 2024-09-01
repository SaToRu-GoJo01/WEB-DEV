// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    // this function can also run without index, and array 
    console.log(index, array);
    txt += value + "<br>";
    value = 0;
}
console.log(txt);






// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);



// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

// This example creates a new array from elements with a value larger than 18:
const number = [45, 4, 9, 16, 25];
const over18 = number.filter(myFunction1);

function myFunction1(value, index, array) {
    console.log(value);
  return value > 18;
}
console.log(over18);


// Reduce()