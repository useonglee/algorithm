// HackerRank - bitwise Equations

function bitwiseEquations(a, b) {
  // x의 가장 낮은 값을 찾아야 한다.
  // 정수 배열 두개가 주어진다.
  // x + y = a[i], x XOR y = b[i] 조건이 성립했을 때,
  // 2x + 3y = value 가 된다. (이 조건 중에 최솟값을 찾아야 함)
  // 조건이 성립하지 않으면 0이 된다.
  
  // 수도 코드
  // 1. 반복문으로 a를 탐색한다.
  // 2. n ^ (a[i] - n) = b[i]랑 같으면 x, y를 찾을 수 있다.
  // 3. x, y를 찾는 함수를 만들고 찾으면 2x + 3y를 해서 새로운 배열에 저장한다.
  // 4. 배열을 반환한다.
  // 5. 시간 복잡도 고려.

  const findXY = (v1, v2) => {
      let [A, B] = [0, 0];
      
      if (v1 < v2) {
          return 0;
      }
      
      else if (v1 === v2) {
          A = 0;
          B = v2;
      } 
      
      else {
          A = parseInt(v1 - v2) / 2;
          
          if ((A & v2) === 0) {
              B = (A + v2);
          }
          
          else {
              return 0;
          }
      }
  
      return (2 * A) + (3 * B);
  };
  
  const answer = [];
  
  for (let i = 0; i < a.length; i++) {
      answer.push(findXY(a[i], b[i]));
  }
  
  return answer;
}