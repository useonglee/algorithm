// TODO: 1819번

function longestSemiAlternatingSubstring(s) {
  // 교대로 문자열이 반복되었을 때, 가장 긴 문자열 길이
  // 하나의 문자열은 3개 이상 반복될 수 없다.
  // 문자열을 계속 카운트하다가, 문자열이 연속될 때 문자열 횟수 체크

  if (s.length < 3) {
      return s.length;
  }

  let count = 1;
  let answer = 1;

  for (let i = 1; i < s.length - 1; i++) {
      if (s[i - 1] === s[i] && s[i + 1] === s[i]) {
          answer = Math.max(count + 1, answer);
          count = 1;
      } else {
          count++;
      }
      // console.log(answer, count);
  }

  return Math.max(answer, count + 1);    
}