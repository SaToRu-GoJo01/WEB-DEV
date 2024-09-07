
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.x = 5; // Assign 5 to x

x = 5;
console.log(x); // Display x in the element

var x; // Declare x




// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:
carName = "Volvo";
try{
    console.log(carName);
}
catch(e){
    console.log(e.name);
}
var carName;

