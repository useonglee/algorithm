// TODO: Minimum sum of two numbers formed from digits of an array
// https://www.geeksforgeeks.org/minimum-sum-two-numbers-formed-digits-array-2/?ref=lbp

function solve(arr) {
  // 배열을 반으로 나누어서 더한 값이 가장 작은 수를 구하는 문제
  
  arr = arr.sort((a, b) => a - b);

  let a = '';
  let b = '';

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      a += arr[i];
    } else {
      b += arr[i];
    }
  }

  return Number(a) + Number(b);
}

console.log(solve([6, 8, 4, 5, 2, 3]));
// 358 + 246 => 604

console.log(solve([5, 3, 0, 7, 4]));
// 35 + 047 => 82