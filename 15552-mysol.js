//시간초과

const input = require('fs').readFileSync(0).toString().trim().split('\n');

let arr = [];

for (i = 1; i <= input[0]; i++) {
  let arr = input[i].split(' ');
  let result = Number(arr[0]) + Number(arr[1]);
  console.log(result);
}

//제출 정답

const input = require('fs').readFileSync(0).toString().trim().split('\n');

let arr = [];
let result = '';

for (i = 1; i <= input[0]; i++) {
  let arr = input[i].split(' ');
  result += Number(arr[0]) + Number(arr[1]) + "\n";
}

console.log(result);