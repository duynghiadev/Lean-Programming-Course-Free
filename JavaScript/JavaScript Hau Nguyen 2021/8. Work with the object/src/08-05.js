// Object exercises
// 1. Create an object student with name is Easy Frontend and age is 18 🚀
const student1 = {};
student1.name = 'Easy Frontend';
student1.age = 18;
console.log('student1:', student1);

console.log('='.repeat(40));

// =======================================================================

const student = {
  name: 'Duynghiadev',
  age: 22,
};
console.log('student:', student);

console.log('='.repeat(40));

// =======================================================================

// 2. Check if an object is empty (means have no keys) 🚀
// { } --> no keys --> length of key list is 0
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log('isEmpty({}):', isEmpty({}));
console.log('isEmpty({ id: 1 }):', isEmpty({ id: 1 }));

console.log('='.repeat(40));

// =======================================================================

// 3. Get average mark of an object 🚀
// calcAvgMark({ math: 10, english: 8 }) --> math: 9
function calcAvgNark(mark) {
  if (!mark) return -1;

  // avg = sum / length
  const length = Object.keys(mark).length;
  let sum = 0;

  for (const key in mark) {
    const value = mark[key];
    sum += value;
  }

  return (sum / length).toFixed(1);
}
console.log('calcAvgNark({ math: 10, english: 9 }):', calcAvgNark({ math: 10, english: 9 }));
console.log('calcAvgNark({ math: 8, english: 7 }):', calcAvgNark({ math: 8, english: 7 }));
