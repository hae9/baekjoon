const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// console.log(input[0]*1)
for (i = 1; i <= input[0] * 1; i++) {
  // console.log(input[i].trim().split(' ')[1])
  let num = input[i].trim().split(' ')[0] * 1;
  let text = input[i].trim().split(' ')[1];
  // console.log(num)
  let arr = [];
  for (j = 0; j < text.length; j++) {
    for (k = 0; k < num; k++) {
      arr.push(text[j]);
    }
  }
  console.log(arr.join(''));
}
// const text = input.split(' ')
