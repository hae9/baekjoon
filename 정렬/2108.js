// https://www.acmicpc.net/problem/2108
// const { format } = require('path');

// const filePath = process.platform === 'linux' ? 0 : 'input.txt';
// const [n, ...arr] = require('fs')
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map(Number);
// const cnt = {};
// for (let num of arr) {
//   cnt[num] = (cnt[num] || 0) + 1;
// }
// const max = Math.max(...Object.values(cnt));
// let mode = [];
// for (let key in cnt) {
//   if (cnt[key] === max) {
//     mode.push(Number(key));
//   }
// }
// mode.sort((a, b) => a - b);
// mode = mode.length > 1 ? mode[1] : mode[0];

// const sum = arr.reduce((a, b) => a + b, 0);
// arr.sort((a, b) => a - b);

// console.log(
//   `${Math.round(sum / n)}\n${arr[Math.floor(n / 2)]}\n${mode}\n${
//     arr[arr.length - 1] - arr[0]
//   }`
// );

// 다른사람 풀이
let data = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .toString()
  .trim()
  .split('\n');
const arr = new Array(8001);
for (let i = 0; i < arr.length; i++) arr[i] = 0;
let max = -4001,
  min = 4001,
  sum = 0,
  count = 0,
  maxCount = 0,
  countArr = [],
  str = '';
for (let i = 1; i < data.length; i++) {
  const num = parseInt(data[i]);
  sum += num;
  arr[num + 4000]++;
  if (num > max) max = num;
  if (num < min) min = num;
}
str += `${Math.round(sum / (data.length - 1))}\n`;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    count += arr[i];
    if (count >= (data.length - 1) / 2) {
      str += `${i - 4000}\n`;
      break;
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    if (maxCount <= arr[i]) maxCount = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    if (maxCount == arr[i]) countArr.push(i - 4000);
  }
}
str += `${countArr.length > 1 ? countArr[1] : countArr[0]}\n`;
str += `${max - min}\n`;
console.log(str.slice(0, -1));
