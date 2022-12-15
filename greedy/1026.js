const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [A, B] = arr.map((ele) => ele.split(' ').map(Number));
