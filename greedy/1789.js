const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let S = Number(require('fs').readFileSync(filePath).toString().trim());

// let answer = 0;
// let sum = 0;
// while (sum < S) {
//   answer++;
//   let i = answer;
//   sum = 0;
//   while (i > 0) {
//     sum += i;
//     i--;
//   }
//   if (sum > S) {
//     answer--;
//     break;
//   }
// }
// console.log(answer);

let answer;
function sol(start, end) {
  if (start > end) return;
  let mid = parseInt((start + end) / 2, 10);
  let sum = (mid * (mid + 1)) / 2;
  if (sum <= S) {
    answer = mid;
    return sol(mid + 1, end);
  } else {
    return sol(start, mid - 1);
  }
}
sol(1, S);
console.log(answer);
