// TODO: 1821번

function minDeletionsToObtainStringInRightFormat(s) {
  let occurB = 0;
  let minDelete = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'A') {
          minDelete = Math.min(occurB, minDelete + 1);
      } else {
          occurB++;
      }
  }

  return minDelete;
}

// 첫번째 시도 실패

function minDeletionsToObtainStringInRightFormat(s) {
  // A와 B로만 구성되어 있음.
  // 문자를 삭제해서 ..AB.. 로 만들어야 한다.
  // 삭제한 갯수 반환
  // A의 끝이 어딘지 파악한다.
  // 그 전까지 B가 나오면 카운트
  // 이후에 A가 나오면 카운트
  // 가장 적게 삭제할 수 있는 값을 찾아라.

  let lastA = s.lastIndexOf('A');
  let lastB = s.lastIndexOf('B');
  console.log(lastA, lastB);
  
  let deleted = 0;

  if (s[lastA] === s[s.length - 1]) {
      lastA = s.length;
  }

  for (let i = 0; i <= lastA; i++) {
      if (s[i] === 'B') {
          deleted++;
      }
  }
  
  for (let i = lastA + 1 ; i < s.length; i++) {
      if (s[i] === 'A') {
          deleted++;
      }
  }

  return deleted;
}
