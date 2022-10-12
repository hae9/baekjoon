10952;
const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(input);
for (i = 0; i < input.length - 1; i++) {
  let arr = input[i].split(' ');
  let res = Number(arr[0]) + Number(arr[1]);
  console.log(res);
}

// //10951
// const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')

// for(i=0; i<input.length; i++) {
//   let arr = input[i].split(' ')
//   let res = Number(arr[0])+Number(arr[1])
//   console.log(res)
// }
