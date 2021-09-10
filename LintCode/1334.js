function rotate(nums, k) {
  // k만큼 배열을 회전한다.

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}