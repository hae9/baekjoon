const input = require('fs').readFileSync('input.txt').toString();

let count = 0;
let N = Number(input);

for (i = 1; i <= N; i += 1) {
  if (i < 100) {
    count += 1;
    continue;
  }
  let arr = String(i).split('');
  // console.log(arr)
  if (arr[0] - arr[1] === arr[1] - arr[2]) {
    count += 1;
  }
}
console.log(count);
