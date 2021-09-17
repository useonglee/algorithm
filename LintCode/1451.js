// TODO: 1451번

function maxDistToClosest(seats) {
  // 1은 사람이 있고, 0은 비어있는 자리이다.
  // 알렉스가 앉았을 때, 가장 가까운 사람과의 거리가 최대인 경우
  // 즉, 비어있는 자리에 앉았을 때, 현재 앉아있는 사람과의 거리가
  // 가장 멀어야함.
  // 그리고 그 사람과의 거리를 반환한다.

  // 수도 코드
  // 1. 0이 제일 많은 구간을 찾는다.
  // 2. 이 구간에서 끝이 1이라면 가운데를 앉는다.
  // 3. 구간의 끝이 배열의 끝이라면 끝에 앉는다.
  // 4. 투포인터로 푼다.

  let [left, maxDist] = [-1, 0];

  for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 0) continue;
      
      if (left === -1) {
          maxDist = Math.max(maxDist, i);
      }
      else {
          maxDist = Math.max(maxDist, (i - left) / 2);
      }

      left = i;
  }

  // 끝이 0일 경우
  if (seats[seats.length - 1] === 0) {
      maxDist = Math.max(maxDist, seats.length - 1 - left);
  }

  return Math.floor(maxDist);
}