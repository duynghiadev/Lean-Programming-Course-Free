// define an array empty
const numberList = [];
const numberList1 = [1, 2, 3]; // a list of number
const wordList = ['Easy', 'Frontend']; // a list of string
const flagList = [true, false, false]; // a list of boolean

// a list of students
const studentList = [
  { id: 1, name: 'Ronaldo' },
  { id: 2, name: 'Messi' },
  { id: 3, name: 'Neymar' },
];

// a list of list 😆
const board = [
  [1, 2],
  ['a', 'b', 'c'],
  [true, false, true, false, false],
];

// a list of mixed data type
const mixedList = [1, 2, 'word', true, null, undefined, { id: 1, name: 'Easy' }, [1, 2, 3]];

// access these data of array
const numberList2 = [3, 5, 7];
console.log('numberList2.length:', numberList2.length);
console.log('numberList2[0]:', numberList2[0]);
console.log('numberList2[1]:', numberList2[1]);
console.log('numberList2[2]:', numberList2[2]);
console.log('numberList2[numberList2.length-1]:', numberList2[numberList2.length - 1]); // 7 (the last element)

console.log('='.repeat(50));

// array two-dimensional
const board1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log('👇 This is two-demensional array: 👇');
console.log('board1:', board1);
console.log('board1[0]:', board1[0]);
console.log('board1[1]:', board1[1]);
console.log('board1[2]:', board1[2]);
console.log('board1[0][1]:', board1[0][1]);
console.log('board1[1][2]:', board1[1][2]);
