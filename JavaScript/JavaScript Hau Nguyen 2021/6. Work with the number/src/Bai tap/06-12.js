// 12. Bài toán gọi taxi
// Các bài mà không có video thì mình tham khảo trên chat-gpt

function calculateTaxiFare(distance) {
  const baseFare = 2;
  const ratePerKilometer = 1.5;

  const totalFare = baseFare + ratePerKilometer * distance;
  return totalFare;
}

const distanceTraveled = 10;
const fare = calculateTaxiFare(distanceTraveled);

console.log('The fare for the taxi ride is $' + fare.toFixed(2));
