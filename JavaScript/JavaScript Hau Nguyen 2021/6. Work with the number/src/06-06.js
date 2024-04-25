// 1. Random a number in range of [0, n]
// n = 10
// 0, 1, 2, 5, 10
// Math.radom() --> [0, 1) --> có nghĩa là hàm random nó sẽ chạy từ số 0 đến 0.9999, nó sẽ không chạy đến số 1

function randomNumber(n) {
  if (n <= 0) return -1;

  const random = Math.random() * n;
  return Math.round(random);
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(-1));
console.log(randomNumber(100));

// 2. Random a number in range of [a, b] with a < b
