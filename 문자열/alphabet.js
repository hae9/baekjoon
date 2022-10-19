const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');

// 알파벳 소문자 배열
const arr = [];
for (let i = 97; i < 123; i++) {
  arr.push(String.fromCharCode(i));
}

const res = [];
for (i = 0; i < arr.length; i++) {
  if (input.includes(arr[i])) {
    res.push(input.findIndex((ele) => ele === arr[i]));
  } else {
    res.push(-1);
  }
}
console.log(...res);
