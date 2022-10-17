function d(n) {
  let arr = n
    .toString()
    .split('')
    .map((x) => parseInt(x));
  return parseInt(arr.reduce((acc, cur) => acc + cur, 0)) + n;
}

NotSelfNum = [];
SelfNum = [];
for (i = 1; i < 10000; i += 1) {
  NotSelfNum.push(d(i));
}
for (i = 1; i <= 10000; i += 1) {
  SelfNum.push(i);
}

console.log(SelfNum);

SelfNum = SelfNum.filter((elem) => !NotSelfNum.includes(elem));
for (i = 0; i < SelfNum.length; i += 1) {
  console.log(SelfNum[i]);
}
