const student = {
  id: 1,
  name: 'duynghiadev',
  isHero: true,
};

// using Object.key()
const keyList = Object.keys(student); // ['id','name','isHero']
for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  console.log('keyList for loop:', keyList);
  console.log('key for loop:', key);
  console.log('value for loop:', student[key]);
}

console.log('='.repeat(50));

// or a similar way using forEach
Object.keys(student).forEach((key) => {
  console.log('keyList forEach loop:', keyList);
  console.log('key forEach loop:', key);
  console.log('value forEach loop:', student[key]);
});

console.log('='.repeat(50));

// recommend
for (let key in student) {
  console.log('keyList for...in loop:', keyList);
  console.log('key for...in loop:', key);
  console.log('value for...in loop:', student[key]);
}
