// TODO: 1859번

function MinimumAmplitude(A) {
  // 임의로 하나의 요소를 선택해서 이동할 수 있다.
  // 가장 큰 값과 가장 작은 값의 차이가 배열의 진폭이다.
  // 가장 작은 진폭을 찾아야 한다. 최대 3번의 움직임으로

  let n = A.length;

  if (n < 4) return 0;

  A.sort((a, b) => a - b);
  // console.log(A);

  let answer = Infinity;
  for (let i = 0; i < 4; i++) {
      answer = Math.min(answer, A[n - 3 - 1 + i] - A[i]);
  }

  return answer;

//   const option1 = A[n - 4] - A[0];
//   const option2 = A[n - 3] - A[1];
//   const option3 = A[n - 2] - A[2];
//   const option4 = A[n - 1] - A[3];
//   console.log(option1, option2, option3, option4);

//   const result = Math.min(option2, Math.min(option3, option4));

//   return Math.min(option1, result);
}