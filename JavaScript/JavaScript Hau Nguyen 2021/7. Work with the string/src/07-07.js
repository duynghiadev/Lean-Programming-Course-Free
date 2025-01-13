// write a function to transform a string:
// - The first letter in UPPERCASe
// - The rest in lowercase
// Eg: capitalize('easy FRontend') --> 'Easy frontend'
// p1.toUpperCase()
// p2.toLowerCase()
// p1 p2

function capitalize(str) {
  if (str === '') return 'Invalid string';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log("capitalize(''):", capitalize(''));
console.log("capitalize('ABC'):", capitalize('ABC'));
console.log("capitalize('EasY FronteND'):", capitalize('EasY FronteND'));
