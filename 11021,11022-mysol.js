const input = require('fs').readFileSync('input.txt').toString().split('\n');
let arr = [];
let sum = '';

// for (i=1; i<=input[0]; i++) {
//   arr = input[i].split(' ');
//   sum += `Case #${i}: ${Number(arr[0]) + Number(arr[1])}\n`
// }
// console.log(sum);

for (i=1; i<=input[0]; i++) {
  arr = input[i].split(' ');
  sum += `Case #${i}: ${arr[0]} + ${arr[1]} = ${Number(arr[0]) + Number(arr[1])}\n`
}
console.log(sum);