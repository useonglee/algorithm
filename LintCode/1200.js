// TODO: LintCode - 1200번

function findRelativeRanks(nums) {
  // 정수 배열의 요소중에서 가장 큰 요소부터 금, 은, 동으로 변환한다.
  // 요소가 남아있으면 4위부터 남은 순위를 매긴다.

  const ranks = nums.slice().sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    const curRank = ranks.indexOf(nums[i]);

    if (curRank === 0) nums[i] = "Gold Medal";
    else if (curRank === 1) nums[i] = "Silver Medal";
    else if (curRank === 2) nums[i] = "Bronze Medal";
    else {
      nums[i] = String(curRank + 1);
    }
  }

  return nums;
}