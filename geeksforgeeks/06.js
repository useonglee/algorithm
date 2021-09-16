// TODO: GeeksforGeeks - Making elements of two arrays same with minimum increment/decrement
// https://www.geeksforgeeks.org/making-elements-of-two-arrays-same-with-minimum-incrementdecrement/?ref=lbp

function MinOperation(A, B, n) {
  // A 배열의 요소를 각 1씩 증가 또는 감소를 해서 B와 같게 한다.
  // 순서는 상관없고 요소 구성만 맞으면 된다.
  // 최소한으로 증가 또는 감소한 카운트를 반환한다.

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  console.log(A, B);

  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] !== B[i]) {
      answer += Math.abs(A[i] - B[i]);
    }
  }

  return answer;
}

console.log(MinOperation([3, 1, 1], [1, 2, 2], 3));
// 2

console.log(MinOperation([3, 1, 1], [1, 1, 2], 3));
// 1