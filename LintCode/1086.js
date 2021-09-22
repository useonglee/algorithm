// TODO: LintCode - 1086번

function repeatedStringMatch(A, B) {
  // A문자열이 몇번 반복해야 B문자열과 매칭되는지 찾는 문제
  // 둘 중에 Minimum 카운트를 반환한다.
  // 만약 반복되는 문자열이 없으면 -1을 반환

  let repeated = '';
  let count = 0;

  while(repeated.length <= A.length + B.length) {
    count++;
    repeated = A.repeat(count);
    
    if (repeated.includes(B)) return count;
  }

  return -1;    
}