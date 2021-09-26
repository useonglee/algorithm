// TODO: Codility - lesson 4: MaxCounters

function solution(N, A) {
  // 카운터 X는 1씩 증가한다.
  // 맥스 카운터는 카운터중에서 제일 큰 값 => N + 1
  // 인덱스 A[K] 값에 따라 카운터 1씩 증가한다.
  // 카운터에 따라 값을 증가시키고 배열을 반환한다.
  
  const counters = Array(N).fill(0);

  let [maxCounter, curCounter] = [0, 0];

  for (let i = 0; i < A.length; i++) {
      if (A[i] === N + 1) {
          maxCounter = curCounter;

      } else {
          if (counters[A[i] - 1] < maxCounter) {
              counters[A[i] - 1] = maxCounter + 1;
          } else {
              counters[A[i] - 1] += 1;
          }
      }

      if (curCounter < counters[A[i] - 1]) {
          curCounter = counters[A[i] - 1];
      }
  }

  for (let i = 0; i < counters.length; i++) {
      if (counters[i] < maxCounter) {
          counters[i] = maxCounter;
      }
  }

  return counters;
}