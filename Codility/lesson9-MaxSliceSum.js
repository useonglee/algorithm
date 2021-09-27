// TODO: Codility - lesson 9: MaxSliceSum

// 정확도: 92%
function solution(A) {
  // 구간 합을 찾는 문제 (카데인 알고리즘)
  // 구간 합 중에서 가장 큰 합을 반환한다.

  let curMax = A[0];
  let answer = A[0];

  for (let i = 1; i < A.length; i++) {
      curMax = Math.max(A[i], curMax + A[i]);
      answer = Math.max(answer, curMax);
  }

  return answer; 
}

// test case
// [-2, 1]
// [1, -2]
// [-2, 1, 1]

// console.log(solution([-2, 3, 1]));
// 4

// console.log(solution([-2, 1, -2]));
// 1