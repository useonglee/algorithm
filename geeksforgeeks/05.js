// TODO: GeeksforGeeks - Minimum sum of absolute difference of pairs of two arrays
// https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/?ref=lbp

function findMinSum(A, B, n) {
  // A배열의 요소와 B배열의 요소를 하나씩 절대값으로 빼서 더한 값이 제일 작은 경우
  // 제일 작은 값을 반환한다.
  
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < n; i++) {
    answer += Math.abs(A[i] - B[i]);
  }

  return answer;
}

console.log(findMinSum([3, 2, 1], [2, 1, 3], 3));
// 0

console.log(findMinSum([4, 1, 8, 7], [2, 3, 6, 5], 4));
// 6