// TODO: LintCode - 1212번

function findMaxConsecutiveOnes(nums) {
  // 0과 1로만 이루어진 배열이 주어진다.
  // 1이 가장 연속적으로 많이 나온 수는 몇인지 찾는 문제

  nums = nums.join('').split('0');
  return Math.max(...nums.map(v => v.length));
}