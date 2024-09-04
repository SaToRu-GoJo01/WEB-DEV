const d = new Date();
console.log(d);
d.setFullYear(2020);
console.log(d);

const d1 = new Date();
d1.setFullYear(2020, 11, 3);
console.log(d1);

const d2 = new Date();
d2.setMonth(10);
console.log(d2);

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
console.log(text);