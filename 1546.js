const input = require('fs').readFileSync('input.txt').toString().split('\n');
const arr = input[1].split(' ');

const max = Math.max(...arr);
const arr2 = arr.map((elem) => Math.round((elem / max) * 100));
let res = 0;
console.log(arr2);
for (i = 0; i < arr2.length; i += 1) {
  res = res + parseInt(arr2[i]);
}

console.log(res / input[0]);
