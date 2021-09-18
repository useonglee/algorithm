// TODO: LintCode - 1226번

function minMoves2(nums) {
  // 요소들을 1씩 증가 또는 감소를 해서 모든 요소가 같게 만든다.
  // 최소한으로 만들어야 한다.
  // 시간 복잡도는 O(n^2) 미만

  // 수도 코드
  // 1. 정렬을 하고 기준으로 잡을 요소를 선택한다. (가운데 요소)
  // 2. 모든 요소를 기준에 맞게 증가 또는 감소하고 카운트를 한다.
  // 3. 만약 nums의 길이가 짝수일 경우
  // 4. 기준점이 두 개이므로 다른 하나도 기준점으로 놓고 카운트를 한다.
  // 5. 짝수일 경우는 둘 중에 더 작은 수를 반환한다.

  nums = nums.sort((a, b) => a - b);

  let answer = 0;
  let standard = nums[parseInt(nums.length / 2)];

  for (let i = 0; i < nums.length; i++) {
      answer += Math.abs(nums[i] - standard);
  }

  if (nums.length % 2 === 0) {
      let minMoves = 0;
      standard = nums[parseInt(nums.length / 2) - 1];

      for (let i = 0; i < nums.length; i++) {
          minMoves += Math.abs(nums[i] - standard);
      }

      answer = Math.min(answer, minMoves);
  }

  return answer;
}