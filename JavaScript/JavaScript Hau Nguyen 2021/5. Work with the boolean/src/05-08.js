// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false

// flag
function isPositiveEvenNumber_1(num) {
  let isValid; //undefined

  // checking...
  if (num > 0 && num % 2 === 0) {
    isValid = true;
    console.log(isValid);
  } else {
    isValid = false;
    console.log(isValid);
  }

  return isValid;
}
isPositiveEvenNumber_1(10);

/**
 * ================================================================================
 */
console.log('='.repeat(30));
/**
 * ================================================================================
 */

function isPositiveEvenNumber_2(num) {
  let isValid = false;

  if (num > 0 && num % 2 === 0) {
    isValid = true;
    console.log(isValid);
  }
  console.log(isValid);

  return isValid;
}
isPositiveEvenNumber_2(7);

/**
 * ================================================================================
 */
console.log('='.repeat(30));
/**
 * ================================================================================
 */

function isPositiveEvenNumber_3(num) {
  if (num > 0 && num % 2 === 0) {
    return true;
  }
  return false;
}

/**
 * ================================================================================
 */
console.log('='.repeat(30));
/**
 * ================================================================================
 */

function isPositiveEvenNumber_4(num) {
  return num > 0 && num % 2 === 0;
}
