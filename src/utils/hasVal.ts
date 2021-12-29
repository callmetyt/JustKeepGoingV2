export default function hasVal(val: null | undefined | string) {
  return val !== null && val !== undefined && val !== '';
}
