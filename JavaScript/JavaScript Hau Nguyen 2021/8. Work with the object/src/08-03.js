const student = {
  name: 'Easy Frontend',
  const: 'haha',
  function: 'it works',
  true: 'work too',
};

const name1 = 'Easy Frontend';
const age1 = 18;

const student1 = {
  name1: name1, // key and value variable have the same name1
  age1: age1, // key and value variable have the same age1
};

// shorthand (recommend)
const student2 = {
  name1,
  age1,
};

// Object Destructuring
const student3 = {
  name: 'Duy Nghia Dev',
  age: 22,
};

// old way
const name = student.name;
const age = student.age;

// new way using object destructuring
const { name2, age2 } = student; // recommend

// -----------------------------------------------

'name' in student3; // true
'age' in student3; // true
'isHero' in student3; // false

const moreProps = {
  isHero: true,
  gender: 'male',
};

// v1: using Object.assign()
const cloneStudent = Object.assign({}, student3, moreProps);

// v2: using spread operator (shorter, easier to read)
const cloneStudent2 = {
  ...student3,
  ...moreProps,
};

// deep clone object
const student4 = {
  name: 'Ronaldo',
  age: 38,

  mark: {
    math: 10,
    english: 7,
  },
};

const cloneStudent4 = {
  ...student4,
};

cloneStudent4.mark.math = 1;
console.log('student4.mark.math part 1:', student4.mark.math); // 1 😢 haha

// solution, clone nested levels if any
const student5 = {
  name: 'Ronaldo',
  age: 40,
  mark: {
    math: 10,
    english: 7,
  },
};

const cloneStudent4_1 = {
  ...student5,
  mark: {
    ...student5.mark,
  },
};

cloneStudent4_1.mark.math = 1;
console.log('student5.mark.math part 2:', student5.mark.math);
