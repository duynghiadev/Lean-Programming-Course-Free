const student = {
  id: 1,
  name: 'Van A',
  name: 'Van B', // same key come later will take precedence
  isHero: true,
  'key has space': 'super',

  sayHi() {
    console.log('Hello!!');
  },
};

const student1 = {
  id: 1,
  name: 'Duynghiadev',
  isHero: true,
  'avg mark': 9,
};

console.log('student1.name:', student1.name);
console.log("student1['avg mark']:", student1['avg mark']);

const key = 'avg mark';
console.log('student1.key:', student1.key);
console.log('student1[key]:', student1[key]);

// update value of a key
student1.name = 'Ronaldo';

// simply set new key for student
student1.age = 22;
student1['mark'] = 10;

console.log('student1.age:', student1.age);
console.log('student1.mark:', student1.age);
