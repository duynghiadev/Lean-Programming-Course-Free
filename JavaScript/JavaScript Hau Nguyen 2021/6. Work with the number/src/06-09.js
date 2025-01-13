// 1. Write a function to check if a number odd/even
function isOdd(n) {
  return n % 2 === 0;
}

function isEven(n) {
  return n % 2 === 1;
}

// 2. Write a function to check if a number is divisible by 5
function isDivisibleBy5(n) {
  return n % 5 === 0;
}

// 3. Write a function to check if a number is perfect square
// Bài này nói về tìm 1 số chính phương. Số chính phương là số tự nhiên có căn bậc hai là một số tự nhiên, hay nói cách khác, số chính phương bằng bình phương của một số nguyên (Ví dụ: 25 = 5 * 5)
// n = a * a
function isPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);

  return sqrtN * sqrtNInt === n;
}

console.log(isPerfectSquare(20));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(10));
