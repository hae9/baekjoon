const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const newArray = [];
arr.forEach((ele) => newArray.push(ele.trim().split(' ').map(Number)));
const cnts = [];
for (let i = 0; i < N; i++) {
  const [x, y] = arr[i].trim().split(' ').map(Number);
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (x < newArray[j][0] && y < newArray[j][1]) {
      cnt++;
    }
  }
  cnts.push(cnt + 1);
}

console.log(cnts.join(' '));
