const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let array = [];

for (let i = 2; i < input.length; i++) {
  const applicant = input[i].trim().split(' ').map(Number);
  if (applicant.length === 1) {
    sol(array);
    array = [];
  } else {
    array.push(applicant);
  }

  if (i === input.length - 1) {
    sol(array);
  }
}

function sol(array) {
  const newArr = array;
  newArr.sort((a, b) => a[0] - b[0]);

  let min = newArr[0][1];
  let answer = 1;
  for (let i = 1; i < newArr.length; i++) {
    const num = newArr[i][1];
    if (min > newArr[i][1]) {
      min = newArr[i][1];
      answer++;
    }
  }
  console.log(answer);
}
