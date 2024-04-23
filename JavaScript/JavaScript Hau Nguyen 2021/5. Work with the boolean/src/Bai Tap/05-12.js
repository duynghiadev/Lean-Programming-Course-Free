// 12. Viết hàm lấy giá vé tương ứng theo số tuổi.html

// Below is an example of how you can write a function in JavaScript that returns the ticket price based on age using both if...else and switch...case statements:

// ====================================================================

// Using if...else
function getTicketPriceIfElse(age) {
  let ticketPrice;

  if (age < 6) {
    ticketPrice = 0; // Free for children under 6
  } else if (age >= 6 && age <= 12) {
    ticketPrice = 10; // Child ticket price for ages 6 to 12
  } else if (age >= 13 && age <= 64) {
    ticketPrice = 20; // Adult ticket price for ages 13 to 64
  } else {
    ticketPrice = 15; // Senior ticket price for ages 65 and above
  }

  return ticketPrice;
}

// Using switch...case
function getTicketPriceSwitch(age) {
  let ticketPrice;

  switch (true) {
    case age < 6:
      ticketPrice = 0;
      break;

    case age >= 6 && age <= 12:
      ticketPrice = 10;
      break;

    case age >= 13 && age <= 64:
      ticketPrice = 20;
      break;

    default:
      ticketPrice = 15;
  }

  return ticketPrice;
}

console.log('Using if else:');
console.log('Age 4, Ticket Price: $' + getTicketPriceIfElse(4));
console.log('Age 10, Ticket Price: $' + getTicketPriceIfElse(10));
console.log('Age 25, Ticket Price: $' + getTicketPriceIfElse(25));
console.log('Age 70, Ticket Price: $' + getTicketPriceIfElse(70));

console.log('\nUsing switch case:');
console.log('Age 4, Ticket Price: $' + getTicketPriceSwitch(4));
console.log('Age 10, Ticket Price: $' + getTicketPriceSwitch(10));
console.log('Age 25, Ticket Price: $' + getTicketPriceSwitch(25));
console.log('Age 70, Ticket Price: $' + getTicketPriceSwitch(70));
