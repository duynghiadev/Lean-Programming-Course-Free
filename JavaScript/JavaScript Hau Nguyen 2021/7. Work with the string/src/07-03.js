// get a character at position index
console.log("'Easy Frontend'.charAt(0):", 'Easy Frontend'.charAt(0));
console.log("'Easy Frontend'.charAt(3):", 'Easy Frontend'.charAt(3));

const name = 'Easy Frontend';
console.log('name.charAt(name.length - 1):', name.charAt(name.length - 1));

console.log("'Easy Frontend'[0]:", 'Easy Frontend'[0]);
console.log("'Easy Frontend'[3]:", 'Easy Frontend'[3]);

const name1 = 'Easy Frontend';
console.log('name1[name1.length - 1]:', name1[name1.length - 1]);

// string concatenation
const a = 'Easy';
const b = 'Frontend';
const c = a + ' ' + b;
console.log('c:', c);
const d = a.concat(' ', b);
console.log('d:', d);
const e = `${a} ${b}`;
console.log('e:', e);

// browse the string
const name2 = 'Easy Frontend';
for (let i = 0; i < name2.length; i++) {
  console.log(`name2[${i}]:`, name2[i]);
}

// convert lowercase and uppercase letters
console.log("'Easy Frontend'.toLowerCase():", 'Easy Frontend'.toLowerCase());
console.log("'Easy Frontend'.toUpperCase():", 'Easy Frontend'.toUpperCase());

// search for substring
const name3 = 'Hello Duynghiadev';
console.log("name3.indexOf('e'):", name3.indexOf('e'));
console.log("name3.lastIndexOf('v'):", name3.lastIndexOf('v'));

// check if it contains a substring or not
const name4 = 'Easy and Frontend';
console.log("name4.startsWith('easy'):", name4.startsWith('easy'));
console.log("name4.startsWith('Easy'):", name4.startsWith('Easy'));
console.log("name4.startsWith('and'):", name4.startsWith('and'));

console.log("name4.includes('Easy'):", name4.includes('Easy'));
console.log("name4.includes('and'):", name4.includes('and'));
console.log("name4.includes('Frontend'):", name4.includes('Frontend'));

console.log("name4.endsWith('Frontend'):", name4.endsWith('Frontend'));
console.log("name4.endsWith('and'):", name4.endsWith('and'));
console.log("name4.endsWith('frontend'):", name4.endsWith('frontend'));
