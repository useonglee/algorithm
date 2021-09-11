// TODO: 702번

function concatenetedString(s1, s2) {
  // s1, s2의 문자열 교집합을 찾는 문제

  let one = '';
  for (let i = 0; i < s1.length; i++) {
      if (s2.indexOf(s1[i]) === -1) {
          one += s1[i];
      }
  }

  let two = '';
  for (let i = 0; i < s2.length; i++) {
      if (s1.indexOf(s2[i]) === -1) {
          one += s2[i];
      }
  }

  return one + two;
};