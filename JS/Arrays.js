let foods = ["biryani","kulfi","fried Rice"];
console.log(foods);
console.log(foods[0]);

let str = foods.join(",");
console.log(str);
console.log(str.split(","));

let dishes = ["Naan","Chole","Bhature","Paneer",];
let newDishes = ["Chapati","Dal-Makhani"];
console.log(dishes.concat(newDishes));
console.log(newDishes.push("Puri"));//Push()-Returns the new length of the array.
console.log(newDishes.pop());
console.log(newDishes);