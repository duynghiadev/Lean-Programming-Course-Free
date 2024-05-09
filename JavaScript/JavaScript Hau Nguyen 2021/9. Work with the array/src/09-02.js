/**
 * Trong này chứa tất cả method trong array 🚀🚀
 */

// Define an array
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// every(callbackFn): Check if all elements satisfy the condition
const allGreaterThanZero = numbers.every((num) => num > 0);
console.log('Every element is greater than zero:', allGreaterThanZero); // true

// some(callbackFn): Check if any element satisfies the condition
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log('Some element is even:', hasEvenNumber); // true

// indexOf(searchElement): Find the first occurrence of the searchElement
const firstAppleIndex = fruits.indexOf('apple');
console.log('Index of "apple":', firstAppleIndex); // 0

// lastIndexOf(searchElement): Find the last occurrence of the searchElement
const lastAppleIndex = fruits.lastIndexOf('apple');
console.log('Last index of "apple":', lastAppleIndex); // 0

// includes(searchElement): Check if the array contains the searchElement
const hasBanana = fruits.includes('banana');
console.log('Fruits include "banana":', hasBanana); // true

// find(callbackFn): Find the first element satisfying the condition
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log('First even number:', firstEvenNumber); // 2

// findIndex(callbackFn): Find the index of the first element satisfying the condition
const firstEvenNumberIndex = numbers.findIndex((num) => num % 2 === 0);
console.log('Index of the first even number:', firstEvenNumberIndex); // 1

// push(element0, ..., elementN): Add elements to the end of the array
numbers.push(6, 7);
console.log('After pushing elements:', numbers);

// pop(): Remove the last element from the array
const lastElement = numbers.pop();
console.log('Popped element:', lastElement);
console.log('After popping:', numbers);

// shift(): Remove the first element from the array
const firstElement = numbers.shift();
console.log('Shifted element:', firstElement);
console.log('After shifting:', numbers);

// unshift(element0, ..., elementN): Add elements to the beginning of the array
numbers.unshift(0, 1);
console.log('After unshifting elements:', numbers);

// splice(start, deleteCount, item1, ..., itemN): Remove/insert elements in the middle of the array
numbers.splice(2, 2, 8, 9);
console.log('After splicing:', numbers);

// forEach(callbackFn): Loop through the array
console.log('Each element doubled:');
numbers.forEach((num) => {
  console.log(num * 2); // Double each number and print
});

// map(callbackFn): Transform the array
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// filter(callbackFn): Filter the array based on condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// slice(start, end): Get a sub-array
const subArray = numbers.slice(1, 4);
console.log('Sub-array:', subArray);

// reduce(): Reduce the array to a single value
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of numbers:', sum);

// fill(value, start = 0, end = arr.length): Fill the array with a value
numbers.fill(0, 2, 4);
console.log('After filling with 0 from index 2 to 4:', numbers);

// join(): Convert the array to a string
const fruitString = fruits.join(', ');
console.log('Fruits as a string:', fruitString);

// concat(): Concatenate arrays
const newArray = array1.concat(array2);
console.log('Concatenated array:', newArray);

// reverse(): Reverse the array
numbers.reverse();
console.log('Reversed array:', numbers);

// sort(): Sort the array
fruits.sort();
console.log('Sorted fruits:', fruits);
