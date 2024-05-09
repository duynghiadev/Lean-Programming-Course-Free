// 7. Kiểm tra 2 objects có bằng nhau không

// Using Object.keys() in JavaScript --> this is normal type 🚀
const isEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
    console.log('key of keys1:', key);
  }
  return true;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { c: 1, d: 2 };

console.log('isEqual(obj1, obj2):', isEqual(obj1, obj2));
console.log('isEqual(obj2, obj3):', isEqual(obj2, obj3));

console.log('='.repeat(40));

// Using isEqual method in JavaScript --> this is type advanced 🚀
Object.prototype.isEqual = function (obj) {
  const keys1 = Object.keys(this);
  const keys2 = Object.keys(obj);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (this[key] !== obj[key]) {
      return false;
    }
  }

  return true;
};

// Example usage:
const obj4 = { a: 1, b: 2 };
const obj5 = { a: 1, b: 2 };

console.log('obj4.isEqual(obj5):', obj4.isEqual(obj5)); // Output: true
