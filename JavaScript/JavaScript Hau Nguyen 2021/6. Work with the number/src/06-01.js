// Giới thiệu về kiểu number
const count = 1;
const mark = 9.5;
const long = 1000000;
const longer = 1_000_000; // rare usage
const short = 1e6; // usually see this
const smaller = 0.0001;
const smallerShort = 1e-4;

// Arithmetic operators
const sum = 1 + 2; // 3
const substract = 1 - 2; // -1
const multiply = 1 * 2; // 2
const divide = 1 / 4; // 0.25

const remainder = 7 % 5; // 2 because 7 = 5x1 + 2 (remainder)

// increment
let count4 = 1;
const n4 = count4++; // 1 postfix, return first, then increase

let count1 = 1;
const n1 = ++count1; // 2 prefix, increase first, then return

// decrement
let count2 = 1;
const n2 = count2--; // 1 postfix, return first, then decrease

let count3 = 1;
const n3 = --count3; // 0 prefix, decrease first, then return

// unary plus: attempts to convert to number if it's not a number
const n5 = +'123'; // 123

// unary negation: return the negation of the operand
const n6 = -'123'; // -123

// exponentiation operator
const n = 2 ** 3; // means 2^3 = 8

// Assignment operators
// addition assignment
let n9 = 1;
n9 += 1; // 2, similar to n = n + 1

// subtraction assignment
let n10 = 1;
n10 -= 1; // 0 similar to n = n - 1

// multiplication assignment
let n11 = 1;
n11 *= 3; // 3 similar to n = n * 3

// division assignment
let n7 = 1;
n7 /= 2; // 0.5 similar to n = n / 2

// toString(base);
const n8 = 20;
n8.toString(); // '20' (default is 10)
n8.toString(10); // '20' Decimal
n8.toString(16); // '14' Hexadecimal
n8.toString(8); // '24' Octal
n8.toString(2); // '10100' Binary
