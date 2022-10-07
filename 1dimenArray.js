// //10818, 배열 내 최솟값, 최댓값 뽑아내기
// const input = require('fs').readFileSync('input.txt').toString().split('\n')

// const arr = input[1].toString().split(' ').map(elem => parseInt(elem))

// console.log(Math.min(...arr), Math.max(...arr))   // ...arr 전개연산자: '...'로 표현, 객체나 배열의 원소들을 하나씩 꺼내어서 펼쳐서 리턴

// console.log(Math.min.apply(null, arr), Math.max.apply(null, arr)) 
// //Function.prototype.apply() 메소드는 js에서 함수를 호출하는 방법 중 하나
// //apply(함수에서 사용할 this객체, 호출하는 함수로 전달할 파라미터)


//2562, 최댓값 찾고 몇번째 수인지 구하기
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(elem=> parseInt(elem))
const max = Math.max(...input)
const found = input.findIndex(elem => elem===max)+1

console.log(`${max + '\n' + found}`)
