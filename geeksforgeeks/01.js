// TODO: GeeksforGeeks - Minimum Increment operations to make Array unique
// https://www.geeksforgeeks.org/minimum-increment-operations-to-make-array-unique/

function minIncrementForUnique(arr) {
  // 배열의 요소중 하나를 선택해서 1씩 증가할 수 있다.
  // 최소한으로 증가해서 유니크 배열을 만든다.
  // minimum count를 반환한다.
  
  arr = arr.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      const temp = arr[i];

      arr[i] = arr[i - 1] + 1;
      answer += arr[i] - temp;
    }
  }
  
  return answer;
}

console.log("answer", minIncrementForUnique([3, 2, 1, 2, 1, 7]));
// [3, 4, 1, 2, 5, 7] => 6

console.log("answer", minIncrementForUnique([1, 2, 2]));
// [1, 2, 3] => 1