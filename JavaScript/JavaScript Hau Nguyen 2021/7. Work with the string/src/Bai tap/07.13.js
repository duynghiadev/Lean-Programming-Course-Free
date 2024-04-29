// 13. Convert số giây sang chuỗi hhmmss
function secondsToHHMMSS(seconds) {
  seconds = parseInt(seconds);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return formattedTime;
}

const seconds = 3661;
const formattedTime = secondsToHHMMSS(seconds);
console.log('formattedTime:', formattedTime);
