// 7. Kiểm tra 2 objects có bằng nhau không
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
