// HackerRank - marsExploration

function marsExploration(s) {
  // Write your code here
  // 'SOS' 문자열이 반복해야 한다.
  // 주어진 문자열에서 'SOS'랑 다른 문자를 찾아야함
  // 다른 문자의 개수를 반환
    
  // 수도 코드
  // 1. 먼저 주어진 문자열에 맞게 'SOS'가 반복된 문자열을 만든다.
  // 2. 주어진 문자열과 새로 만든 문자열을 비교하면서 다른 문자의 개수를 체크한다.
  // 3. 다른 문자의 개수를 반환한다.
  
  let sosLen = s.length / 3;
  let newStr = 'SOS'.repeat(sosLen);
  
  let answer = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] !== newStr[i]) answer++;
  }
  
  return answer;
}