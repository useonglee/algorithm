// TODO: GeeksforGeeks - Sorting array with reverse around middle
// https://www.geeksforgeeks.org/sorting-array-reverse-around-middle/?ref=lbp

function ifPossible(arr, n) {
  // 주어진 배열에서 중간 부분의 요소들을 reverse한다.
  // 그 다음 중간 부분의 영역을 양 옆으로 증가시키고, 다시 reverse한다.
  // 이렇게 해서 sort가 되면 true를 반환.

  // 수도 코드
  // 1. 주어진 배열을 정렬하고 변수에 할당한다.
  // 2. 기존 배열과 정렬한 배열을 for문으로 비교한다.
  // 3. 정렬한 배열과 기존 배열의 같은 인덱스에서 요소가 다르면서
  // 4. 기존 배열의 뒤에서 부터 시작하는 요소와 값이 다르면 false

  let sortArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (sortArr[i] !== arr[i] && sortArr[i] !== arr[n - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(ifPossible([1, 6, 3, 4, 5, 2, 7], 7));
// true

console.log(ifPossible([1, 6, 3, 4, 5, 7, 2], 7));
// false