// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

function getErrorMessage_1(errorCode) {
  let message = '';

  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or password';
      break;
    }

    case 'E02': {
      message = 'Too many attempts';
      break;
    }

    case 'E03': {
      message = 'Missing data';
      break;
    }

    default: {
      message = 'Something went wrong';
      break;
    }
  }

  return message;
}
console.log('getErrorMessage_1:', getErrorMessage_1('E01'));
console.log('getErrorMessage_1:', getErrorMessage_1('E02'));
console.log('getErrorMessage_1:', getErrorMessage_1('E03'));
console.log('getErrorMessage_1:', getErrorMessage_1('E04'));

// =====================================================================
console.log('='.repeat(50));
// =====================================================================

function getErrorMessage_2(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

  return errorMap[errorCode] || 'Something went wrong';
}
console.log('getErrorMessage_2:', getErrorMessage_2('E01'));
console.log('getErrorMessage_2:', getErrorMessage_2('E02'));
console.log('getErrorMessage_2:', getErrorMessage_2('E03'));
console.log('getErrorMessage_2:', getErrorMessage_2('E04'));
