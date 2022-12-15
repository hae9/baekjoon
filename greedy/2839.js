const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let N = Number(require('fs').readFileSync(filePath).toString().trim());

const max = Math.ceil(N / 3);
let answer = -1;
for (let i = 0; i <= max; i++) {
  for (let j = max; j >= 0; j--) {
    if (N === 5 * j + 3 * i) {
      answer = j + i;
      break;
    }
  }
}
console.log(answer);

// 다른사람 코드
function solve() {
  let count = 0;
  while (true) {
    if (N % 5 === 0) {
      console.log(count + N / 5);
      break;
    }
    if (0 > N) {
      console.log(-1);
      break;
    }
    count++;
    N -= 3;
  }
}
solve();
