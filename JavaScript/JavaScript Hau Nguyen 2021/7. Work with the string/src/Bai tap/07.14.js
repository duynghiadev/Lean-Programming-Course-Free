// 14. Kiểm tra URL có sử dụng phương thức bảo mật
function isSecureUrl(url) {
  return url.startsWith('https://');
}

const url1 = 'http://www.example.com';
const url2 = 'https://www.example.com';
const url3 = 'https://www.google.com';
console.log('isSecureUrl(url1):', isSecureUrl(url1));
console.log('isSecureUrl(url2):', isSecureUrl(url2));
console.log('isSecureUrl(url3):', isSecureUrl(url3));
