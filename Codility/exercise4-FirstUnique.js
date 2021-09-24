// TODO: Codility - exercise 4: FirstUnique

// 정확도: 100%
function solution(A) {
  // 가장 첫번째로 나온 유니크한 요소를 찾는다.
  // 유니크 요소가 없으면 -1을 반환한다.
  // 있으면 요소를 반환한다.

  let hash = {};

  for (let i = 0; i < A.length; i++) {
      if (hash[A[i]] === undefined) {
          hash[A[i]] = [0, i, A[i]];
      }

      hash[A[i]][0]++;
  }
  
  let uniques = Object.values(hash).filter(v => v[0] === 1);
  uniques = uniques.sort((a, b) => a[1] - b[1]);

  return uniques.length === 0 ? -1 : uniques[0][2];
}