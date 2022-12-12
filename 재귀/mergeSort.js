const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let cnt = 0;
let answer = -1;

function merge(left, right) {
  const sortedArr = [];
  let [i, j] = [0, 0];
  while (left.length > i && right.length > j) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[i] <= right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
    }
    cnt++;
    if (cnt === K) {
      answer = sortedArr[sortedArr.length - 1];
    }
  }

  while (left.length > i) {
    sortedArr.push(left[i]);
    i++;
    cnt++;
    if (cnt === K) {
      answer = sortedArr[sortedArr.length - 1];
    }
  }
  while (right.length > j) {
    sortedArr.push(right[j]);
    j++;
    cnt++;
    if (cnt === K) {
      answer = sortedArr[sortedArr.length - 1];
    }
  }

  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  //slice로 해주기 때문에 원본 arr은 손상 없다.
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort(arr);
console.log(answer);
// const arr = [7, 4, 3, 2, 1, 6, 5];
// const sortedArray = mergeSort(arr);
// console.log(arr);
// console.log(sortedArray);
