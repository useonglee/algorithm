// TODO: LintCode - 1053번

function dominantIndex(nums) {
  // 배열에서 가장 큰 요소는 적어도 다른 모든 요소보다 두 배 이상 크다.
  // 조건이 만족하지 않으면 -1을 반환한다.
  // 조건이 만족하면 max의 인덱스를 반환한다.

  const max = Math.max(...nums);

  const dominantLen = nums.filter(v => v*2 <= max).length;
  if (dominantLen <= 1) return 0;

  return dominantLen + 1 === nums.length ? nums.indexOf(max) : -1;
}