// TODO: 547번

function intersection(nums1, nums2) {
  // 교차하는 요소 반환, 투 포인터

  const answer = [];
  
  let left = 0;
  let right = 0;

  while (nums1[left] !== undefined) {
      if (nums1[left] === nums2[right]) {
          answer.push(nums1[left]);
          left++;
          right++
      } else {
          left++;
      }
  }

  answer = answer.filter((v, idx) => {
      return answer.indexOf(v) === idx;
  })

  return answer;
}