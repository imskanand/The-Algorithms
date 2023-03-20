export default function binarySearch(arr: number[], key: number): boolean {
  let low: number = 0;
  let high: number = arr.length;

  do {
    let mid: number = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      console.log(`The Index is ${mid}`);
      return true;
    } else if (arr[mid] > key) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);

  return false;
}
