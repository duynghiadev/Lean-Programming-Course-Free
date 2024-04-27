// 14. So sánh 2 số nguyên
function compareNumbers(num1, num2) {
  if (num1 === num2) {
    return `${num1} is equal to ${num2}`;
  } else if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else {
    return `${num1} is less than ${num2}`;
  }
}

const number1 = 10;
const number2 = 5;
console.log(compareNumbers(number1, number2));
