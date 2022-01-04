export default function formatTime(ms: number, pattern?: string) {
  const second = Math.floor(ms / 1000) % 60;
  const minute = Math.floor(ms / 1000 / 60) % 60;
  const hour = Math.floor(ms / 1000 / 60 / 60);
  return pattern
    ? pattern
        .replace(/hh/, fixZero(hour))
        .replace(/mm/, fixZero(minute))
        .replace(/ss/, fixZero(second))
    : `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(num: number) {
  return num >= 10 ? num.toString() : '0' + num;
}
