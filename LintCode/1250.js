function thirdMax(nums) {
  // 시간복잡도 O(n)으로 풀기
  // 세번째 맥시멈 넘버를 반환한다.
  // 없으면 배열에서 가장 큰 수를 반환한다. (or 3미만인 경우)
  // 내림차순 정렬을 한다.
  // 중복 제거 후 3번째 값 반환
  nums = nums.sort((a, b) => b - a);

  // const set = new Set(nums);
  // const uniqueArr = [...set];
  // console.log(set);
  const uniqueArr = nums.filter((v, idx) => {
      return nums.indexOf(v) === idx;
  })

  if (uniqueArr.length < 3) {
      return Math.max(...uniqueArr);
  }

  return uniqueArr[2];
}