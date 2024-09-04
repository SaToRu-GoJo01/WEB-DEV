// Create a Set
const letters1 = new Set(["a","b","c"]);
console.log(letters1);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

console.log(letters instanceof Set);

console.log(letters.has("d"));

letters.forEach(letter=>console.log(letter));



// Note
// A Set has no keys, so keys() returns the same as values().

// This makes Sets compatible with Maps.

const myIterators = letters.keys();
for (const x of myIterators) console.log(x);




// The entries() Method
// The entries() method returns an Iterator with [value,value] pairs from a Set.

// Note
// The entries() method is supposed to return a [key,value] pair from an object.

// A Set has no keys, so the entries() method returns [value,value].

// This makes Sets compatible with Maps.
const myIterators2 = letters.entries();

for (const x of myIterators2) console.log(x);
