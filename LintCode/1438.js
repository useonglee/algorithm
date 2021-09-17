// TODO: 1438번

function largeGroupPositions(S) {
  // 문자열에서 3개이상 연속된 문자를 그룹화 한다.
  // 그룹화는 인덱스로 한다.

  let groups = [];
  let occur = 1;

  for (let i = 1; i < S.length; i++) {
      if (S[i - 1] === S[i]) {
          occur++;
      } else {
          if (occur >= 3) {
              groups.push([i - occur, i - 1]);
          }

          occur = 1;
      }
  }

  if (occur >= 3) {
      groups.push([S.length - occur, S.length - 1]);
  }

  return groups;
}