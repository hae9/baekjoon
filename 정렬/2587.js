const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let arr = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

console.log(arr.reduce((a, b) => a + b, 0) / arr.length);
arr.sort((a, b) => a - b);
console.log(arr[2]);
