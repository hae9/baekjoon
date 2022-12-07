const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const cnt = {};
for (let num of arr) {
  cnt[num] = (cnt[num] || 0) + 1;
}
const max = Math.max(...Object.values(cnt));
let mode = [];
for (let key in cnt) {
  if (cnt[key] === max) {
    mode.push(Number(key));
  }
}
mode.sort((a, b) => a - b);
mode = mode.length > 1 ? mode[1] : mode[0];

const sum = arr.reduce((a, b) => a + b, 0);
arr.sort((a, b) => a - b);

console.log(
  `${Math.round(sum / n)}\n${arr[Math.floor(n / 2)]}\n${mode}\n${
    arr[arr.length - 1] - arr[0]
  }`
);
