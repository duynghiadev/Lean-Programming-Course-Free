// function declaration
function sayHello(name) {
  // body function
  console.log('Welcome', name);
}
sayHello('Duynghiadev');

function sumTwoPositive(a, b) {
  // IMPORTANT: check a and b should be positive
  if (a <= 0 || b <= 0) return -1; // should return -1 instead of null/undefined

  return a + b;
}
console.log(sumTwoPositive(2, 5));
