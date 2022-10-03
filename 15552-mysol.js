//시간초과

let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let arr = [];
result = '';

for (i = 1; i <= input[0]; i++) {
  let arr = input[i].split(' ');
  let result = Number(arr[0]) + Number(arr[1]);
  console.log(result);
}

//제출 정답


for (i = 1; i <= input[0]; i++) {
  let arr = input[i].split(' ');
  result += Number(arr[0]) + Number(arr[1]) + "\n";
}

console.log(result);