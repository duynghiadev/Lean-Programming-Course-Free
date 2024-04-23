// using if...else ❌
function printMonthIfElse(n) {
  let month = '';

  if (n === 1) month = 'Jan';
  else if (n === 2) month = 'Feb';
  else if (n === 3) month = 'Mar';
  else if (n === 4) month = 'Apr';
  else if (n === 5) month = 'May';
  else if (n === 6) month = 'Jun';
  else if (n === 7) month = 'Jul';
  else if (n === 8) month = 'Aug';
  else if (n === 9) month = 'Sep';
  else if (n === 10) month = 'Oct';
  else if (n === 11) month = 'Nov';
  else if (n === 12) month = 'Dec';
  else month = 'Invalid number';

  return month;
}
console.log('printMonthIfElse:', printMonthIfElse(5));

/**
 * ================================================================================
 */
console.log('='.repeat(30));
/**
 * ================================================================================
 */

// using switch...case ✅
function printMonthSwitchCase(n) {
  let month = '';

  switch (n) {
    case 1: {
      month = 'Jan';
      break;
    }

    case 2: {
      month = 'Feb';
      break;
    }

    case 3: {
      month = 'Mar';
      break;
    }

    case 4: {
      month = 'Apr';
      break;
    }

    case 5: {
      month = 'May';
      break;
    }

    case 6: {
      month = 'Jun';
      break;
    }

    case 7: {
      month = 'Jul';
      break;
    }

    case 8: {
      month = 'Aug';
      break;
    }

    case 9: {
      month = 'Sep';
      break;
    }

    case 10: {
      month = 'Oct';
      break;
    }

    case 11: {
      month = 'Nov';
      break;
    }

    case 12: {
      month = 'Dec';
      break;
    }

    default: {
      month = 'Invalid number';
    }
  }

  return month;
}
console.log('printMonthSwitchCase:', printMonthSwitchCase(4));
