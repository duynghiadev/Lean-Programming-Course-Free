// 17. Trả về full name khi biết first và last name
function getFullName(firstName, lastName) {
  // Using the concat method --> recommend
  // const fullName = firstName.concat(' ', lastName);

  // Using the '+' operator
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

const firstName = 'John';
const lastName = 'Doe';
console.log(getFullName(firstName, lastName));
