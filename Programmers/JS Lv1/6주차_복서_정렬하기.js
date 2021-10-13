function solution(weights, head2head) {
  // 1. 승률
  // 2. 자신보다 무거운 복서 승리 경험
  // 3. 몸무게 순
  // 4. 작은 번호 순
  // 위 정렬 방법대로 정렬하고, 순서를 반환한다.
  
  // 수도 코드
  // 1. 이중 반복문을 통해 승률, 무거운 복서 승리, 몸무게, 번호를 구한다.
  // 2. 구한 값들을 배열에 저장한다.
  // 3. 배열을 주어진 조건에 맞게 정렬한다.
  // 4. 번호를 제외한 나머지는 제거하고 번호를 반환한다.
  
  let hash = {};
  
  for (let i = 0; i < head2head.length; i++) {
      let win = 0;
      let total = 0;
      
      for (let j = 0; j < head2head[i].length; j++) {
          if (hash[i + 1] === undefined) {
              hash[i + 1] = [0, 0, weights[i], i + 1];
          }
          
          if (i === j) continue;
          else {
              // 경기 수 확인
              if (head2head[i][j] !== 'N') {
                  total++;
                  
                  // 이긴 경우
                  if (head2head[i][j] === 'W') {
                      win++;
                      
                      // 자기보다 무거운 복서를 이긴 횟수
                      if (weights[i] < weights[j]) hash[i + 1][1]++;
                  }
              }
          }
          
          // 승률 계산
          let winRate = (win / total);
          hash[i + 1][0] = isNaN(winRate) ? 0 : winRate;
      }
  }

  let answer = Object.values(hash);
  
  answer = answer.sort((a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      else if (a[1] !== b[1]) return b[1] - a[1];
      else if (a[2] !== b[2]) return b[2] - a[2];
      else return a[3] - b[3];
  });
  // console.log(answer);

  // 복서의 번호만 반환한다.
  return answer.map(v => v[3]);
}