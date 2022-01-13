export default function formatDate(ms: number) {
  const date = new Date(ms);
  return `${date.getFullYear()}年${
    date.getMonth() + 1
  }月${date.getDate()}日 ${date.getHours()}时${date.getMinutes()}分`;
}
