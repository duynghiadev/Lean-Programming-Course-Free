// 13. Tìm chữ số lớn nhất của một số nguyên dương

function findLargestDigit(n) {
  const numberString = n.toString();
  console.log('numberString:', numberString, '👉 typeof numberString:', typeof numberString);

  let largestDigit = 0;

  for (let i = 0; i < numberString.length; i++) {
    const digit = parseInt(numberString[i]);
    console.log('digit:', digit, '👉 typeof digit:', typeof digit);

    if (digit > largestDigit) {
      largestDigit = digit;
    }
  }
  return largestDigit;
}

const number = 874235;
const largestDigit = findLargestDigit(number);
console.log('The largest digit in', number, 'is', largestDigit);
