// 16. Truy tìm mật mã
// Code bên file 07.16.js dùng method nâng cao, còn bên file này dùng các method cơ bản dễ hiểu hơn
function findSecretCode(text, secretCode) {
  const foundOccurrences = [];
  let index = text.indexOf(secretCode);
  console.log('index1:', index);

  // Loop through the text and find all occurrences of the secret code
  while (index !== -1) {
    foundOccurrences.push(index);
    index = text.indexOf(secretCode, index + 1);
    console.log('index2:', index);
  }

  return foundOccurrences;
}

const text = 'The secret code is ABC123. The ABC123 code is hidden.';
const secretCode = 'ABC123';

const foundOccurrences = findSecretCode(text, secretCode);
console.log(foundOccurrences);
