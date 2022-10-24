const input = require('fs').readFileSync('input.txt').toString().split('\n');
let num = Number(input[0]);

for (let i = 1; i <= num; i += 1) {
  let arr = input[i]
    .trim()
    .split(' ')
    .map((ele) => Number(ele));
  let testCase = Number(arr.shift());
  console.log(arr);
  console.log(testCase);
  let avg = arr.reduce((prev, cur) => prev + cur, 0);
  avg = avg / testCase;
  console.log(avg);
  const res = arr.filter((elem) => elem > avg);

  const result = ((res.length / testCase) * 100).toFixed(3);
  console.log(result + '%');
}
