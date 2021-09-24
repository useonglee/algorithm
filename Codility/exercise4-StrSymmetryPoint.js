// TODO: Codility - exercise 4: StrSymmetryPoint

// 정확도: 100%
function solution(S) {
  // 문자열이 주어지면 왼쪽에서 오른쪽으로 반전이 되는 구조이다.
  // 빈 문자열이면 빈 문자열을 반환한다.
  // 조건에 맞지 않으면 -1을 반환한다.
  // 한 문자열을 기준으로 반전이 되는데, 기준점이 되는 문자열의 인덱스를 반환.
  
  const N = S.length;
  
  // S의 길이가 짝수일 경우 반전될 수가 없음
  if (N % 2 === 0) return -1;

  let answer = parseInt(N / 2)

  for (let i = 0; i < answer; i++) {
      if (S[i] !== S[N - 1 - i]) {
          return -1
      }
  }

  return answer;
}