const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i <= input[0]; i += 1) {
  let res = [];
  let num = 0;
  for (let j = 0; j < input[i].length; j += 1) {
    if (input[i][j] === 'O') {
      num = num + 1;
      res.push(num);
    } else {
      num = 0;
    }
  }
  console.log(
    res.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0) // 0을 안넣어서 런타임에러 떴음..
  );
}
