const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const str = input.toUpperCase();

const res = {};
[...str].forEach((x) => {
  if (res[x] === undefined) {
    res[x] = 1;
  } else {
    res[x] += 1;
  }
});
console.log(res);
const resVal = Object.values(res);
console.log(resVal);
const max = Math.max(...resVal);
console.log(max);

const resKey = [];
for (const key in res) {
  if (res[key] === max) {
    resKey.push(`${key}`);
  }
}
let result = '';
if (resKey.length === 1) {
  result = resKey[0];
} else {
  result = '?';
}
console.log(result);
