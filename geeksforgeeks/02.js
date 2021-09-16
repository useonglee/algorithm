// TODO: GeeksforGeeks - Minimum Increment / decrement to make array elements equal
// https://www.geeksforgeeks.org/minimum-increment-decrement-to-make-array-elements-equal/

function minCost(arr, n) {
  // 요소들을 증가 또는 감소를 1씩 할 수 있다.
  // 모든 요소를 같은 숫자로 만든다.
  // 최소한으로 증가 또는 감소를 해야한다.
  // minimum count를 반환한다.

  // 수도코드
  // 최소한으로 카운트가 가능한 기준 요소를 찾는다.
  // 각 요소에서 기준 요소를 뺀 값을 다 더하고 반환한다.

  arr = arr.sort((a, b) => a - b);

  let answer = 0;
  let standard = arr[parseInt(n / 2)];

  for (let i = 0; i < n; i++) {
    answer += Math.abs(arr[i] - standard);
  }

  // 길이가 짝수일 경우 기준점이 다를 수 있으므로
  if (n % 2 === 0) {
    let evenCost = 0;
    standard = arr[parseInt(n / 2) - 1];

    for (let i = 0; i < n; i++) {
      evenCost += Math.abs(arr[i] - standard);
    }

    answer = Math.min(answer, evenCost);
  }

  return answer;
}

console.log(minCost([1, 5, 6, 7, 8, 10], 4));
// 13

console.log(minCost([1, 5, 7, 10], 4)); 
// 11

console.log(minCost([10, 2, 20], 3)); 
// 18