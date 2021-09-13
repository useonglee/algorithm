// TODO: 1540번

function canConvert(s, t) {
  // T에 있는 문자열로 S에 있는 문자열을 다 제거한다.
  // 순서에 맞게 다 제거할 수 있으면 true
  // 투 포인터 활용하기

  if (s === undefined || t === undefined) return false;

  let idx = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === t[idx]) {
          idx++;
      }
  }

  return idx === t.length ? true : false;
}