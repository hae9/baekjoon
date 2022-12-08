const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [n, ...words] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = Array.from(Array(51), () => Array());
for (let word of words) {
  if (!arr[word.trim().length].includes(word.trim())) {
    arr[word.trim().length].push(word.trim());
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 1) arr[i].sort();
}
console.log(arr.flat().join('\n'));

// 다른사람 풀이
// let unique = new Set(words)
// let newW = Array.from(unique)
// newW.sort((firstWord, secondWord) => {
//   if (firstWord.length - secondWord.length === 0) {
//     // 길이가 같으면....
//     // for?
//     for (let i = 0; i < firstWord.length; i++) {
//       if (firstWord.charCodeAt(i) !== secondWord.charCodeAt(i)) {
//         return firstWord.charCodeAt(i) - secondWord.charCodeAt(i);
//       }
//     }
//   }
//   return firstWord.length - secondWord.length;
// });

// console.log(...words);
