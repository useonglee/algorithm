// TODO: LintCode - 1236번

function findDisappearedNumbers(nums) {
  // 배열에서 없는 요소를 찾아서 반환한다.

  const appears = Array(nums.length + 1).fill(false);

  for (let i = 0; i < nums.length; i++) {
      if (appears[nums[i]] === false ) {
          appears[nums[i]] = true;
      }
  }

  const answer = [];

  for (let i = 1; i <= appears.length; i++) {
      if (appears[i] === false) {
          answer.push(i);
      }
  }

  return answer;
}