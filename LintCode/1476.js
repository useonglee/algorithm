// TODO: 1476번

function peakIndexInMountainArray(A) {
  // Binary Search
  // 정수로 구성된 배열
  // A[i] 순서대로 값이 크다가 다시 작아짐 => 마운틴 구조
  // 봉우리 인덱스 반환
  
  // 첫번째 풀이법
  // let answer = Math.max(...A);
  // return A.indexOf(answer);

  // 두번째 풀이법 (재귀)
  const recur = (left, right) => {
      const mid = parseInt((left + right) / 2);

      if (A[mid] <= A[mid + 1]) {
          return recur(mid + 1, right);
      }

      if (A[mid - 1] >= A[mid]) {
          return recur(left, mid - 1);
      }

      return mid;
  }

  return recur(0, A.length - 1);
}