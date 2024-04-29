// 12. Format số giây luôn hiển thị 2 chữ số
function formatSeconds(seconds) {
  seconds = parseInt(seconds);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
  return formattedTime;
}

const seconds = 75;
const formattedTime = formatSeconds(seconds);
console.log('formattedTime:', formattedTime);
