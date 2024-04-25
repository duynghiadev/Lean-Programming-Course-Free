// 1. Get the ones of a number having 3 digits (lấy số hàng đơn vị)
function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}
console.log('extractTheOnes(123):', extractTheOnes(123));
console.log('extractTheOnes(1234):', extractTheOnes(1234));

// 2. Get the tens of a number having 3 digits (lấy số hàng chục)
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc((n % 100) / 10);
}
console.log('extractTheTens(223):', extractTheTens(223));
console.log('extractTheTens(987):', extractTheTens(987));

// 3. Get the hundreds of a number having 3 digits (lấy số hàng trăm)
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}
console.log('extractTheHundreds(795):', extractTheHundreds(795));
console.log('extractTheHundreds(876):', extractTheHundreds(876));

// 4. Sum all digits of a number having 3 digits
function sumDigits(n) {
  if (n.toString().length !== 3) return -1;

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  return ones + tens + hundreds;
}
console.log('sumDigits(123):', sumDigits(123));
console.log('sumDigits(345):', sumDigits(345));
