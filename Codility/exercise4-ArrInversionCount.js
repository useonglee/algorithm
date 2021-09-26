// TODO: Codility - exercise 4: ArrInversionCount

function solution(A) {
  // inversion은 인덱스들의 페어이다. P < Q, A[Q] < A[P]
  // 1000000000이 초과되면 -1을 반환한다.
  // 조건에 만족하는 inversions의 개수를 반환한다.
  // mergeSort 문제
  // GeeksforGeeks 사이트 참조

  let count = 0;
  let left = 0;
  let right = A.length - 1;

  if (left < right) {
      let mid = Math.floor((left + right) / 2);

      // left count
      count += mergeCount(A, left, mid);
      // right count
      count += mergeCount(A, mid + 1, right);
      // merge count
      count += mergeCount(A, left, mid, right);
  }

  return count > 1000000000 ? -1 : count;    
}

function mergeCount(A, left, mid, right) {
  let leftArr = [];
  for (let i = left; i < mid + 1; i++) {
      leftArr.push(A[i]);
  }

  let rightArr = [];
  for (let i = mid + 1; i < right + 1; i++) {
      rightArr.push(A[i]);
  }

  let [i, j, k, swaps] = [0, 0, left, 0];

  while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
          A[k++] = leftArr[i++];
      } else {
          A[k++] = rightArr[j++];
          swaps += (mid + 1) - (left + i);
      }
  }

  while (i < leftArr.length) {
      A[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
      A[k++] = rightArr[j++];
  }

  return swaps;
}