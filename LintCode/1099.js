// TODO: LintCode - 1099번

function checkPossibility(nums) {
  // 그리디 문제
  // 정수 배열에서 1개를 수정해서 감소하지 않는 배열로 만들 수 있다.
  // 감소할 수 없으면 false
  // 감소하지 않는 배열은 arr[i] <= arr[i + 1]로 정의한다.

  // 수도 코드
  // 1. 다음 요소보다 현재 요소가 크면 카운트를 한다.
  // 2. 한 번까지 수정할 수 있으므로 count <= 1은 true이다.
  // 3. 수정을 할 때, 앞 또는 뒤를 기준으로 바꿔야 한다. 

  let cur = nums[0];
  let modify = false;

  for (let i = 1; i < nums.length; i++) {
    if (cur <= nums[i]) cur = nums[i];
    else {
      // 한 번이라도 변경했었으면 false를 반환
      if (modify) return false;
      else {
        // 처음 수정하는 경우라면
        modify = true;

        // 변경할 요소가 배열의 첫번째 요소인지 아닌지에 따라 다름
        if (i === 1) cur = nums[i];
        else cur = cur + 1;
      }
    }
  }

  return true;
}