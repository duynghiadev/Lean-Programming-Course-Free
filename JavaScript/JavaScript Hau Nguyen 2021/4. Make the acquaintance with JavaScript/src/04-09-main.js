// Assignment
const count = 1;
const result = 1 + 2 * 3;
const name = 'Easy Frontend';
const isValid = true;

// Unary
const count_1 = 1;
const negativeCount = -count_1;

let idx = 1;
const incrementPrefix = ++idx;

let idx_1 = 1;
const incrementSuffix = idx_1++;

const quantity = 1;

const isValid_1 = !true;

// Ternary (condition ? expression1 : expression2)
const mark = 9;
const grade = mark > 8 ? 'GOOD' : 'BAD';
console.log('grade:', grade);

// Avoid nested ternary
const grade_1 = mark > 8 ? 'GOOD' : mark > 5 ? 'OK' : 'BAD';
console.log(`grade_1: ${grade_1}`);

// Operator Precedence (thứ tự ưu tiên của các operators)
const result_1 = 1 + (2 + -2) * 3 - +'3';
console.log('result_1:', result_1);
