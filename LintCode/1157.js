// TODO: LintCode - 1157번

function findUnsortedSubarray(nums) {
  // 오름 차순으로 정렬이 필요한 요소들의 개수를 찾는 문제
  // 정렬을 한 배열과 하지 않은 배열을 비교하면서 개수를 카운트한다.
  // 정렬이 필요한 구간 중에 가장 짧은 구간을 구해야 한다.

  // const sorted = nums.slice().sort((a, b) => a - b);

  // let [start, end] = [-1, -1];

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== sorted[i]) {
  //     start = i;
  //     break;
  //   }
  // }
  // if (start === -1) return 0;

  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (nums[i] !== sorted[i]) {
  //     end = i;
  //     break;
  //   }
  // }

  // return end - start + 1;

  // 더 간단한 풀이  
  let [start, end, len] = [-1, -1, nums.length];
  let [max, min] = [nums[0], nums[len - 1]];

  for (let i = 1; i <= len; i++) {
    let [a, b] = [nums[i], nums[len - i]];

    a < max ? start = i : max = a;
    b > min ? end = i : min = b;
  }
  console.log(start, end, len)

  return Math.max(0, end + start - len + 1);
}