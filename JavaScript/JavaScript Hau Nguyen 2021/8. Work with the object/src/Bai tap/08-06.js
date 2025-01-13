// 6. Viết hàm clone object nhưng không dùng spread operator

function cloneObj(obj) {
  if (typeof obj !== 'object' || obj === null) {
    console.log('This is not object');
    return obj;
  }

  let clonedObj = {};

  for (let key in obj) {
    let typeObj = typeof obj[key] === 'object' && obj[key] !== null;

    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = typeObj ? cloneObj(obj[key]) : obj[key];
    }
  }
  return clonedObj;
}

const originalObj = {
  name: 'John',
  age: 22,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const originalObj1 = 'duynghiadev';

const resultClonedObj = cloneObj(originalObj);
console.log('resultClonedObj:', resultClonedObj);

console.log('='.repeat(40));

const resultClonedObj1 = cloneObj(originalObj1);
console.log('resultClonedObj1:', resultClonedObj1);
