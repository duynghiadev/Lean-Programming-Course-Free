/**
 * - string to array: split()
 * - array to string: join()
 */

// split()
console.log("'easy frontend'.split():", 'easy frontend'.split());
console.log("'easy frontend'.split(' '):", 'easy frontend'.split(' '));
console.log("'easy frontend'.split('-'):", 'easy frontend'.split('-'));
console.log("'easy frontend'.split('as'):", 'easy frontend'.split('as'));

console.log("'easy frontend'.split(''):", 'easy frontend'.split(''));

// count words
const name = 'Easy Frontend';
const words = name.split(' ');
console.log('words:', words);

// join()
const words1 = ['Easy', 'Frontend'];
console.log('words1.join():', words1.join());
console.log("words1.join(''):", words1.join(''));
console.log("words1.join(' '):", words1.join(' '));
console.log("words1.join('-'):", words1.join('-'));
