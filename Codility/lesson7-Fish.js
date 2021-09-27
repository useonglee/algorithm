// TODO: Codility - lesson 7: Fish

function solution(A, B) {
  // A 배열의 요소는 물고기와 물고기의 크기를 뜻한다.
  // B 배열은 방향을 뜻하고, 0과 1로 이루어졌으며, 0은 위로, 1은 아래 방향이다.
  // 반대 방향의 두 물고기는 둘 중에 큰 물고기만 살아 남는다.
  // 살아남은 물고기의 수를 반환한다.

  let remainFish = 0;
  let stack = [];

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) stack.push(A[i]);
      
    else {
      // 반대 방향물고기가 없고 0 방향이면 생존
      if (stack.length === 0) remainFish += 1;
      else {
        while(stack.length !== 0) {
          const fish = stack.pop();

          if (fish > A[i]) {
            stack.push(fish);
            break;
          }
        }

        if (stack.length === 0) remainFish += 1;
      }
    }
  }

  //만약 1로만 가는 방향이 있을 수도 있기 때문에 stack 길이를 더한다.
  return remainFish + stack.length;
}