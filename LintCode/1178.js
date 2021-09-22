// TODO: LintCode - 1178번

function checkRecord(s) {
  // 문자열은 총 3개로만 표현된다. A:결석, L:지각, P:출석
  // 한 번의 A나, 연속으로 2번의 L을 넘지 않은 학생에게 true

  let A = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') A++;
    if (s[i - 1] === 'L' && s[i] === 'L' && s[i + 1] === 'L') {
      return false;
    }      
  }

  return A > 1 ? false : true;
}