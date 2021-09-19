// TODO: LintCode - 1227번

function repeatedSubstringPattern(s) {
  // 문자열중에 부분 문자열이 계속 반복되는 구조로 되어있다.
  // 만약 반복되는 구조가 아니면 false를 반환
  // 시간 복잡도 O(n^2) 미만

  // 수도 코드
  // 1. substring, repeat를 통해 패턴을 찾는다.
  // 2. 패턴을 찾고 s와 비교해서 답을 찾는다.
  
  const n = s.length;

  for (let i = 1; i <= n / 2; i++) {
      const pattern = s.substring(0, i).repeat(n / i);

      if (pattern === s) {
          return true;
      }
  }

  return false;
}