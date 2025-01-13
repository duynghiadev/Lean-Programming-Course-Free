// Type conersion
const a = 1 + '2'; // '12' as it auto convert from number 1 to string '1' before doing the addition
console.log('a:', a, typeof a);

const b = 1 - '2'; // -1 as it auto convert string '2' to number 2 before doing the substraction
console.log('b:', b, typeof b);

const message = 'JS is easy';
if (message) {
  // message here will be converted into boolean automatically
  console.log('Really!? 🤣');
}

// Explicit conversion
const error = 'Something wrong!';
const hasError = Boolean(error); // we ask to convert string error to boolean
console.log('hasError:', hasError, typeof hasError);

const mark = 9;
const markString = mark.toString(); // or String(mark)
console.log('markString:', markString, typeof mark);

const type = '1';
const typeId = Number.parseInt(type); // or Number(type)
console.log('typeId:', typeId, typeof typeId);
