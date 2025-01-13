// ES5
var name = 'duynghiadev';

// ES6
const PI = 3.14;
const name = 'easy front end';
name = 'Fronend'; // error Assignment to constant variable.

let count = 1;
count = 2; // work

// how to make a name variables
const sanpham = 'js course'; // BAD
const product = 'js course'; // BAD
const productName = 'js course'; // GOOD

// true/false variables
let hasValidItem = true;
let isSelected = false;
let show = false;
let hasPositiveNumber = false;

// single noun
const studen = {
  name: 'duynghiadev',
  age: 22,
};

// plural noun
const students = [].map((student) => console.log(student.name)); // OK

const studentList = [].map((student) => console.log(student.name)); // GOOD
