console.log(Number(123));
console.log(Number('123'));
console.log(Number('abc'));

// Static properties
const epsilon = Number.EPSILON;
const minValue = Number.MIN_VALUE;
const maxValue = Number.MAX_VALUE;
const minSafeInterger = Number.MIN_SAFE_INTEGER;
const maxSafeInterger = Number.MAX_SAFE_INTEGER;
const nan = Number.NaN;
const nagativeInfinity = Number.NEGATIVE_INFINITY;
const positiveInfinity = Number.POSITIVE_INFINITY;

console.log('epsilon:', epsilon);
console.log('min value:', minValue);
console.log('max value:', maxValue);
console.log('minSafeInterger:', minSafeInterger);
console.log('maxSafeInterger:', maxSafeInterger);
console.log('NaN:', NaN);
console.log('nagativeInfinity:', nagativeInfinity);
console.log('positiveInfinity:', positiveInfinity);

// Convert to numbers (parseInt and parseFloat)
console.log(Number('123'));
console.log(Number.parseInt('1.5'));
console.log(Number.parseFloat('1.5'));

console.log(Number('123.5a'));
console.log(Number.parseInt('123.5a'));
console.log(Number.parseFloat('123.5a'));

console.log(Number(null));
console.log(Number(undefined));

console.log(Number(true));
console.log(Number(false));

// Phân biệt toFixed() và toPrecision()
const n = 123.525;
n.toFixed(); // 124 as default value for arg is 0
n.toFixed(0); // 124

n.toFixed(1); // 123.5
n.toFixed(2); // 123.53
n.toFixed(3); // 123.525
n.toFixed(4); // 123.5250
n.toFixed(5); // 123.5250

const n1 = 123.525;
n1.toPrecision(); // 123.525 similar to n.toString()
n1.toString(); // 123.525

n1.toPrecision(0); // error argument must be between 1 and 100
n1.toPrecision(1); // 100
n1.toPrecision(2); // 120
n1.toPrecision(3); // 124
n1.toPrecision(4); // 123.5
n1.toPrecision(5); // 123.53
n1.toPrecision(6); // 123.525
n1.toPrecision(7); // 123.5250
n1.toPrecision(8); // 123.52500
