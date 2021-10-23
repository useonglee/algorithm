// HackerRank - findRange

function findRange(num) {
  // 숫자열을 분석하여 최댓값과 최솟값을 찾고 이 둘의 차이를 반환한다.
  
  // 수도 코드
  // 1. 주어진 숫자열에서 가장 큰 숫자와 가장 작은 숫자를 찾는다.
  // 2. 최솟값 => 첫번째 요소를 1로 만든다.
  // 2-1. 첫번째 요소가 1이라면 두번째 요소를 0으로 만든다. 
  // 3. 최댓값 => 첫번째 요소를 9로 만든다.
  // 3-1. 만약 첫번째 요소가 9라면 9가 아닌 바로 다음 요소를 찾고 9로 만든다.

  // 4. 최댓값 - 최솟값을 반환한다.
  
  num = String(num).split('');
  
  // 가장 큰 요소 찾기
  let maxNum = '';
  
  for (let i = 0; i < num.length; i++) {
      if (num[i] !== '9') {
          maxNum = num[i];
          break;
      }
  }
  
  // 가장 작은 요소 찾기
  let minNum = '';
  let minIndex = 0;
  
  for (let i = 0; i < num.length; i++) {
      if (num[i] !== '1') {
          minNum = num[i];
          minIndex = i;
          break;
      }
  }
  
  // 가장 큰 범위 찾기
  let maximum = '';
  
  for (let i = 0; i < num.length; i++) {
      if (num[i] === maxNum) {
          maximum += '9';
      } else {
          maximum += num[i];
      }
  }
  
  // 가장 작은 범위 찾기
  let minimum = '';
  
  for (let i = 0; i < num.length; i++) {
      if (num[i] === minNum) {
          if (minIndex === 0) minimum += '1';
          else minimum += '0';
      }

      else {
          minimum += num[i];
      }
  }

  return maximum - minimum;
}

/**
<input>
1. 123512
2. 909

<output>
1. 820082
2. 898
 */