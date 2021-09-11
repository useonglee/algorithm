// TODO: 646번

function firstUniqChar(s) {
  // 가장 첫번째로 반복되지 않는 문자열을 반환한다.
  // 없으면 -1을 반환

  if (s.length === 0) return -1;

  const hash = {};

  for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] === undefined) {
          hash[s[i]] = [0, i];
      }

      hash[s[i]][0]++;
  }

  let answer = -1;

  for (let char in hash) {
      if (hash[char][0] === 1) {
          answer = hash[char][1];
          break;
      }
  }

  return answer;
}