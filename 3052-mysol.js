const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const arr = input.map((elem) => parseInt(elem % 42));
const arrSet = new Set(arr);
const unique = [...arrSet];

console.log(unique.length);
