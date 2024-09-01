const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// this sort() can be used to sort array alphabatically
console.log(fruits);
fruits.reverse();
console.log(fruits);

// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted,months);

// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.
const reversed = months.toReversed();
console.log(months,reversed);



// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
const with_compare = points.toSorted(function(a, b){return a - b});
const without_compare = points.toSorted();
console.log("without -> " + without_compare,"with -> " + with_compare);

// Using a sort function, like explained above, you can sort an numeric array in random order
var point = [40, 100, 1, 5, 25, 10];
point.sort(function(){return 0.5 - Math.random()});
console.log(point);

// You can use Math.min.apply to find the lowest number in an array:
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
console.log(myArrayMin(point));
// similarly with max()
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(point));


// JavaScript arrays often contain objects:
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
// Even if objects have properties of different data types, the sort() method can be used to sort the array.

// The solution is to write a compare function to compare the property values:
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);
// Comparing string properties is a little more complex:
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
console.log(cars);