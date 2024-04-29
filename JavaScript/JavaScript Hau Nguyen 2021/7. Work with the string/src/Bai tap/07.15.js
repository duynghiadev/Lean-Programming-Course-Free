// 15. Rút trích domain từ địa chỉ email
function extractDomainFromEmail(email) {
  const domainRegex = /@([^\s@]+)$/;
  const match = email.match(domainRegex);
  console.log('match:', match);
  console.log('match[0]:', match[0]);
  console.log('match[1]:', match[1]);

  return match ? match[1] : null;
}

const email1 = 'example@gmail.com';
const email2 = 'abc@gmail.co.uk';

console.log('extractDomainFromEmail(email1):', extractDomainFromEmail(email1));
console.log('='.repeat(30));
console.log('extractDomainFromEmail(email2):', extractDomainFromEmail(email2));
