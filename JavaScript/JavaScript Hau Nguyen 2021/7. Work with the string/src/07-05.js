// replace
console.log("'easy frontend'.replace(' ', '-'):", 'easy frontend'.replace(' ', '-'));
console.log("'easy frontend'.replace(' ', ''):", 'easy frontend'.replace(' ', ''));

console.log("'easy frontend'.replace('easy', 'Easy'):", 'easy frontend'.replace('easy', 'Easy'));
console.log("'easy frontend'.replace('easy', ''):", 'easy frontend'.replace('easy', ''));

// replace the first match only
console.log("'easy easy frontend'.replace('easy', ''):", 'easy easy frontend'.replace('easy', ''));

// replaceAll
console.log(
  "'learn easy frontend'.replaceAll(' ', '-'):",
  'learn easy frontend'.replaceAll(' ', '-'),
);
console.log(
  "'learn easy frontend easy'.replaceAll('easy', ''):",
  'learn easy frontend easy'.replaceAll('easy', ''),
);

// replace with regexp (Regular Expression)
console.log(
  "'super 123 cool'.replaceAll(/[0-9]/gi, ''):",
  'super 123 cool'.replaceAll(/[0-9]/gi, ''),
);
