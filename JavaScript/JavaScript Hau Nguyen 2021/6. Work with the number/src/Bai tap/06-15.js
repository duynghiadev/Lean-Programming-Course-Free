// 15. Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không

function isPalindrome(number) {
  const numberString = number.toString();

  if (numberString.length > 3) {
    return 'Number has more than 3 digits, cannot be checked for palindrome';
  }

  for (let i = 0; i < Math.floor(numberString.length / 2); i++) {
    if (numberString[i] !== numberString[numberString.length - 1]) {
      return 'Not a palindrome';
    }
  }
  return 'Palindrome';
}

// Example usage
const number1 = 123;
const number2 = 121;
const number3 = 1234;
const number4 = 1.3;
console.log(isPalindrome(number1));
console.log(isPalindrome(number2));
console.log(isPalindrome(number3));
console.log(isPalindrome(number4));
