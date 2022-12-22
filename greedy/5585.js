const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const money = Number(require('fs').readFileSync(filePath).toString().trim());

let change = 1000 - money;

let cnt = 0;
const arr = [500, 100, 50, 10, 5, 1];
for (let i = 0; i < arr.length; i++) {
  if (change >= arr[i]) {
    cnt += parseInt(change / arr[i], 10);
    change = change % arr[i];
  }
}
console.log(cnt);
