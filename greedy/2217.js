const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
arr.sort((a, b) => b - a);
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i] * (i + 1)) {
    max = arr[i] * (i + 1);
  }
}
console.log(max);
