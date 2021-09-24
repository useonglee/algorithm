// TODO: TestDome - Two Sum
// https://www.testdome.com/questions/56606

function findTwoSum(numbers, sum) {
  // 만약 조건에 맞는게 없다면 Null을 반환.
  // 요소 두개를 선택해서 sum과 같으면 한 쌍이다.
  // 해당 요소의 인덱스를 반환하면 된다.
  // 시간 복잡도: O(N)으로 해결해야 함

  let hash = {};
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let cur = sum - numbers[i];
    let pair = hash[cur];

    if (pair !== undefined) {
      answer.push(hash[cur], i);
      break;
    } else {
      hash[numbers[i]] = i;
    }
  }

  return answer;
}

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);