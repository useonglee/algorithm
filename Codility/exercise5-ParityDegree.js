// TODO: Codility - exercise 5: ParityDegree

// 정확도: 100%
function solution(N) {
  // N을 2로 계속 나누었을 때, 나머지 값을 반환한다.
  // 나머값이 K일 때, K의 맥시멈 값을 찾는다.
  // 2^K = pow, N modulo pow = 0 공식이 성립해야 한다.

  let answer = 0;
  let K = 0;

  while (Math.pow(2, K) <= N) {
      K++;

      if (N % Math.pow(2, K) === 0) {
          answer = K;
      }
  }

  return answer;
}