// TODO: Codility - lesson 8: Equi Leader

function solution(A) {
  // 배열 요소의 반 이상 차지하는 것이 배열의 리더이다.
  // equi leader는 배열을 반으로 나누었을 때, 두 배열의 리더가 같은 경우,
  // 현재 기준 인덱스를 반환한다.
  // 배열을 최대한으로 나누었을 때, equi leader의 값을 반환한다.
  // 오른쪽에서 왼쪽으로 요소를 하나씩 옮기면서 각각 리더들을 파악한다.

  let rightHash = {};

  for (let i = 0; i < A.length; i++) {
      if (rightHash[A[i]] === undefined) {
          rightHash[A[i]] = 0;
      }
      rightHash[A[i]]++;
  }

  let equiLeader = 0;
  let leftHash = {};
  let leftLen = 0;
  let leftLeaderCount = 0;
  let rightLen = A.length;

  for (let i = 0; i < A.length; i++) {
      // 왼쪽으로 요소를 하나 옮긴다.
      if (leftHash[A[i]] === undefined) {
          leftHash[A[i]] = 0;
      }
      leftHash[A[i]]++;

      leftLen++;
      rightLen--;
      rightHash[A[i]]--;

      // 옮긴 후 왼쪽 Leader 확인
      if (leftLeaderCount < leftHash[A[i]]) {
          leftLeaderCount = leftHash[A[i]];
          leftLeader = A[i];
      }

      // Equi Leader 확인 후 인덱스 증가
      if (rightHash[A[i]] > parseInt(rightLen / 2) && leftLeaderCount > parseInt(leftLen / 2)) {
          equiLeader++;
      }
  }
  
  return equiLeader;
}