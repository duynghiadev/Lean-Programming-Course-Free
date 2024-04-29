// 16. Truy tìm mật mã
function findSecretCode(text, secretCode) {
  const pattern = new RegExp(secretCode, 'gi');
  const matches = text.match(pattern);

  return matches || [];
}

const text = 'The secret code is ABC123. The ABC123 code is hidden';
const secretCode = 'ABC123';

const foundOccurrences = findSecretCode(text, secretCode);
console.log(foundOccurrences);
