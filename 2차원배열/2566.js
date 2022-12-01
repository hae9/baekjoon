const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let max = 0;
let n = 1;
let m = 1;
for (i = 0; i < input.length; i++) {
  let A = input[i].split(' ').map(Number);
  for (j = 0; j < A.length; j++) {
    if (A[j] > max) {
      max = A[j];
      n = i + 1;
      m = j + 1;
    }
  }
}

console.log(max);
console.log(n, m);
