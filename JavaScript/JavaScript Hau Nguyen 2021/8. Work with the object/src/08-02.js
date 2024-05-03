// value type, the variable store the value
const name = 'Easy Frontend';
const age = 18;
const isHero = true;
const selectedStudent = null;
// |----------------------------|
// |  name = 'Easy Frontend'    |
// |____________________________|

// reference type, the variable store the address/ref of the value

// so in this example
// object value { name, age, ... } will be store at address 123456 (somewhere in memory)
// and the student variable just hold the address 123456 (that's why we call reference)
const student = {
  name: 'Easy Frontend',
  age: 18,
};
// |----------------------|      | ADDRESS: 123456            |
// |  student = 123456    | ---> | VALUE: { name, age, ... }  |
// |______________________|      |____________________________|

// primitive type
const a = 5;
let b = a;
b = 10;
console.log('a:', a);

// reference type
const student1 = {
  name: 'Easy Frontend',
};
const student2 = student1;
student2.name = 'duynghiadev';
console.log('student1.name:', student1.name);
console.log('student1===student2:', student1 === student2);

const student3 = {
  name: 'Easy Frontend',
};
console.log('student1===student3:', student1 === student3);

console.log('='.repeat(40));

// pass by value and pass by reference
// pass by value
function changePrimitive(name1, age1) {
  name1 = 'Easy Frontend';
  age1 = 22;
}

let name1 = 'duynghiadev';
let age1 = 18;
changePrimitive(name1, age1);

console.log('name1:', name1);
console.log('age1:', age1);

// pass by reference
function changeReference(student4) {
  student4.name4 = 'Ronaldo';
  student4.age4 = 38;
}

const student4 = {
  name4: 'Messi',
  age4: '35',
};
changeReference(student4);

console.log('student4.name4:', student4.name4);
console.log('student4.age4:', student4.age4);
