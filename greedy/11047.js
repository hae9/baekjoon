const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [input, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [N, K] = input.split(' ').map(Number);
let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
  if (K >= arr[i]) {
    cnt += parseInt(K / arr[i], 10);
    K = K % arr[i];
  }
  if (K === 0) {
    console.log(cnt);
    break;
  }
}
