const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let array = Array(100)
  .fill()
  .map((e) => Array(100).fill(0));

for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].trim().split(' ').map(Number);
  for (let a = A; a < 10 + A; a++) {
    for (let b = B; b < 10 + B; b++) {
      array[a][b] = 1;
    }
  }
}

const newArr = array.flat();
console.log(newArr.reduce((prev, acc) => prev + acc, 0));
