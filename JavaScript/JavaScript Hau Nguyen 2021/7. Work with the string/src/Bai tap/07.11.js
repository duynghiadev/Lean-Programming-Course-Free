// 11. Tìm và xoá các nguyên âm trong câu văn
function removeVowels(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const characters = sentence.split('');
  console.log('characters:', characters);

  const withoutVowels = characters.filter((char) => {
    console.log('char:', char);
    return !vowels.includes(char);
  });

  const result = withoutVowels.join('');
  return result;
}

const sentence = 'Tìm và xóa các nguyên âm trong câu văn';
const result = removeVowels(sentence);
console.log('result:', result);
