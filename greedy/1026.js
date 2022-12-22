const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [A, B] = arr.map((ele) => ele.split(' ').map(Number));
A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let res = 0;
for (let i = 0; i < N; i++) {
  res += A[i] * B[i];
}
console.log(res);
