export default function twoCrystalBalls(arr: boolean[]): number {
  let jmpAmount = Math.floor(Math.sqrt(arr.length));

  let i = jmpAmount;
  for (; i < arr.length; i += jmpAmount) {
    if (arr[i]) {
      break;
    }
  }

  i -= jmpAmount;
  for (let j = 0; j < jmpAmount && i < arr.length; ++j, ++i) {
    if (arr[j]) {
      return j;
    }
  }

  return -1;
}
