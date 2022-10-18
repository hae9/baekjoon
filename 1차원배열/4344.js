const input = require('fs').readFileSync('input.txt').toString().split('\n');
// console.log(input[0]);
// console.log(input);
for (let i = 1; i <= input[0]; i += 1) {
  let arr = input[i].split(' ');
  // console.log(arr);
  let sum = 0;
  for (let j = 1; j <= arr[0]; j += 1) {
    sum += Number(arr[j]);
  }
  // console.log(sum);
  let average = Number(sum / arr[0]);
  // console.log(average);
  let res = arr.filter((elem) => elem > average);
  // console.log(res);
  console.log(`${((res.length / arr[0]) * 100).toFixed(3)}%`);
}
