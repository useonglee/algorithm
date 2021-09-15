// TODO: 1510번

function buddyStrings(A, B) {
  // A에서 두개의 letter를 스왑했을 때, B와 같으면 true
  // 엣지 케이스 = 길이가 2 미만 또는 길이가 다를 때
  // A와 B가 같은 경우와, 다른 경우를 나눠서 생각한다.

  if (A.length < 2 || B.length < 2 || A.length !== B.length) {
      return false;
  }

  if (A === B) {
      const check = new Set(A.split(''));
      return check.size < B.length;
  }

  let temp = [];

  for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
          temp.push(i);
      }

      if (temp.length > 2) {
          return false;
      }
  }
  // console.log(temp);

  return A[temp[0]] === B[temp[1]] && A[temp[1]] === B[temp[0]];
}