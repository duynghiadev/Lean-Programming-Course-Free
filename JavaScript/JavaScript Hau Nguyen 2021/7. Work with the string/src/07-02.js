const name = 'duy nghia dev';
console.log(name.length);

console.log('Easy Frontend'.charAt(0));
console.log('Easy Frontend'.charAt(3));

const name1 = 'Easy Frontend';
name1.charAt(name1.length - 1);

console.log(''.concat('Easy')); // Output: Easy
console.log(''.concat('Easy', ' ', 'Frontend')); // Output: Easy Frontend

console.log('a'.padStart(5, '*')); // Output: ****a
console.log('ab'.padStart(5, '*')); // Output: ***ab
console.log('abc'.padStart(5, '*')); // Output: **abc

console.log('a'.padEnd(5, '*')); // Output: a****
console.log('ab'.padEnd(5, '*')); // Output: ab***
console.log('abc'.padEnd(5, '*')); // Output: abc**

console.log('='.repeat(20)); // Output: ====================

console.log(' DuyNghiaDev '.trim()); // Output: DuyNghiaDev
console.log(' DuyNghiaDev '.trimStart()); // Output: DuyNghiaDev
console.log(' DuyNghiaDev '.trimEnd()); // Output:  DuyNghiaDev

console.log('='.repeat(30));
console.log('👇In here below is these are Instance Methods👇');

// 1. charAt(index)
const str1 = 'Hello';
console.log(str1.charAt(1)); // Output: "e"

// 2. concat(str [, ...strN])
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Output: "Hello World"

// 3. includes(searchString [, position])
const str3 = 'Hello World';
console.log(str3.includes('World')); // Output: true

// 4. startsWith(searchString [, length])
console.log(str3.startsWith('Hello')); // Output: true

// 5. endsWith(searchString [, length])
console.log(str3.endsWith('World')); // Output: true

// 6. indexOf(searchValue [, fromIndex])
console.log(str3.indexOf('World')); // Output: 6

// 7. lastIndexOf(searchValue [, fromIndex])
console.log(str3.lastIndexOf('Hello')); // Output: 0

// 8. match(regexp)
const matches = str3.match(/o/g);
console.log(matches); // Output: ["o", "o"]

// 9. matchAll(regexp)
const matchesAll = [...str3.matchAll(/o/g)];
console.log(matchesAll); // Output: [["o", index: 4, input: "Hello World"], ["o", index: 7, input: "Hello World"]]

// 10. padStart(targetLength [, padString])
const str4 = '7';
console.log(str4.padStart(3, '0')); // Output: "007"

// 11. padEnd(targetLength [, padString])
const str5 = 'Hello';
console.log(str5.padEnd(11, ' World')); // Output: "Hello World"

// 12. repeat(count)
const str6 = 'abc';
console.log(str6.repeat(3)); // Output: "abcabcabc"

// 13. replace(searchFor, replaceWith)
console.log(str3.replace('World', 'Universe')); // Output: "Hello Universe"

// 14. replaceAll(searchFor, replaceWith)
console.log(str3.replaceAll('Hello', 'Hi')); // Output: "Hi World"

// 15. slice(beginIndex [, endIndex])
console.log(str3.slice(6)); // Output: "World"
console.log(str3.slice(0, 5)); // Output: "Hello"

// 16. substring(indexStart [, indexEnd])
console.log(str3.substring(6)); // Output: "World"
console.log(str3.substring(0, 5)); // Output: "Hello"

// 17. split([sep [, limit]])
const str7 = 'apple,banana,orange';
console.log(str7.split(',')); // Output: ["apple", "banana", "orange"]

// 18. trim()
const str8 = '   Hello World   ';
console.log(str8.trim()); // Output: "Hello World"

// 19. trimStart()
console.log(str8.trimStart()); // Output: "Hello World   "

// 20. trimEnd()
console.log(str8.trimEnd()); // Output: "   Hello World"

// 21. toLowerCase()
const str9 = 'Hello World';
console.log(str9.toLowerCase()); // Output: "hello world"

// 22. toUpperCase()
console.log(str9.toUpperCase()); // Output: "HELLO WORLD"
