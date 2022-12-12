const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let max = 0;
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}
console.log(max);
