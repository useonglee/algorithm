// TODO: GeeksforGeeks - Minimum operations to make GCD of array a multiple of k
// https://www.geeksforgeeks.org/minimum-operations-make-gcd-array-multiple-k/?ref=lbp

function MinOperation(arr, n, K) {
  // 각 요소마다 GCD가 k가 되어야 함
  // 각 요소를 증가 또는 감소를 1씩 할 수 있음
  // 최소한으로 요소를 증가 또는 감소한 값을 찾아야 함
  // 모든 요소가 k의 배수가 되야 함

  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 1 && arr[i] > K) {
      answer += Math.min(arr[i] % K, K - (arr[i] % K));

    } else {
      answer += K - arr[i];
    }
  }

  return answer;
}

console.log(MinOperation([4, 5, 6], 3, 5));
// 2

console.log(MinOperation([4, 9, 6], 3, 5));
// 3