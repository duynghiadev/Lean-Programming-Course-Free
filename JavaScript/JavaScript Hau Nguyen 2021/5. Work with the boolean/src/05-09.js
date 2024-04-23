// Write a function to classify student
// Receive mark as a number, output as below:
/**
 * mark > 8       --> 'Excellence'
 * 7 <= mark <= 8 --> 'Good'
 * 4 <= mark <= 6 --> 'Not Good'
 * mark < 4       --> 'Bad'
 */

function classifyStudent_1(mark) {
  let result;

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';

  return result;
}
console.log('classifyStudent_1:', classifyStudent_1(9));

// =====================================================================

function classifyStudent_2(mark) {
  // Validate arguments
  // mark should be in range of [0, 10]
  if (mark < 0 || mark > 10) return 'Invalid mark. Please again press';

  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';

  return result;
}
console.log('classifyStudent_2:', classifyStudent_2(5));

// =====================================================================

function classifyStudent_3(mark) {
  // Validate arguments
  // mark should be in range of [0, 10]
  if (mark < 0 || mark > 10) return 'Invalid mark';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
console.log('classifyStudent_3:', classifyStudent_3(15));
