const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let time = 0;
for (let i = 0; i < arr.length; i++) {
  time += arr[i];
  answer += time;
}
console.log(answer);
