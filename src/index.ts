import "./style.css";

import linearSearch from "./algorithms/search/linearSearch";
import binarySearch from "./algorithms/search/binarySearch";
import twoCrystalBalls from "./algorithms/search/twoCrystalBalls";

const arr: number[] = [1, 3, 4, 6, 8, 11, 45];
const key: number = 8;

let result: boolean = linearSearch(arr, key);
result = binarySearch(arr, key);

// console.log(result ? "Element Found" : "Element Not Found");

const breaks: boolean[] = [
  false,
  false,
  false,
  false,
  true,
  true,
  false,
  false,
  false
];

let idx = Math.floor(Math.random() * 10000);
const data = new Array(10000).fill(false);

for (let i = idx; i < 10000; ++i) {
  data[i] = true;
}

let twoBalls: number = twoCrystalBalls(data); // doesn't work
twoBalls = twoCrystalBalls(new Array(821).fill(false));
// console.log(twoBalls, -1);
