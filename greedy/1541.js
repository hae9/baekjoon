const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const arr = require('fs').readFileSync(filePath).toString().trim().split(/\b/);
let res = Number(arr[0]);
const minus = arr.indexOf('-');

if (minus === -1) {
  for (let i = 2; i < arr.length; i += 2) {
    res += Number(arr[i]);
  }
} else {
  for (let i = 2; i < arr.length; i += 2) {
    if (i < minus) {
      res += Number(arr[i]);
    } else {
      res -= Number(arr[i]);
    }
  }
}
console.log(res);
