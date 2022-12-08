const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const nums = input[0].split(' ').map(Number);
const uniqueNums = new Set(nums);
const order = [...uniqueNums].sort((a, b) => a - b);

let res = '';
for (let num of nums) {
  let left = 0;
  let right = order.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (order[mid] === num) {
      res += mid + ' ';
      break;
    } else if (order[mid] < num) left = mid + 1;
    else right = mid - 1;
  }
}
console.log(res);
