// Logical Operators
// Nếu là số dương thì...
function checkNumber1(n) {
  if (n > 0) {
    console.log(n, 'la so duong');
  }
}

// Nếu là số dương chẳn thì...
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
    console.log(n, 'la so duong chan');
  }
}

// Nếu là số dương chẳn và lớn hơn 10 thì...
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
    console.log(n, 'la so duong chan lon hon 10');
  }
}

// Nếu là số dương chẳn chia hết cho 5 và lớn hơn 10 thì...
function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n > 10 && n % 5 === 0) {
    console.log(n, 'la so duong chan lon hon 10 va chia het cho 5');
  }
}

// Nếu là số dương chẳn hoặc số âm lẻ thì...
function checkNumber5(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
    console.log(n, 'la so duong chan hoac so am le');
  }
}

checkNumber1(5);
checkNumber2(50);
checkNumber3(500);
checkNumber4(50);
checkNumber5(5000);
