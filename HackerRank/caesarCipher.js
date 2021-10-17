// HackerRank - caesarCipher

function caesarCipher(s, k) {
  // Write your code here
  // 원래 알파벳 순서에서 k만큼 로테이션을 한다.
  // 그리고 주어진 문자열의 인덱스를 로테이션된 알파벳 순서대로 다시 배치한다.
  // 재배치된 문자열을 반환한다.
    
  // 수도 코드
  // 1. 주어진 문자열이 원래의 알파벳 순서에서 몇 번째로 위치하는 알파벳인지 찾는다.
  // 2. 원래의 알파벳 순서를 k만큼 로테이션해서 위치를 바꾼다.
  // 3. 1번에서 구했던 인덱스대로 다시 문자열을 재배치한다.
  // 4. 재배치된 문자열을 반환한다.
  
  let alpa = 'abcdefghijklmnopqrstuvwxyz';
  
  let idx = [];
  for (let i = 0; i < s.length; i++) {
      if (alpa.indexOf(s[i]) !== -1) {
          idx.push(alpa.indexOf(s[i]));
      } else {
          idx.push(s[i]);
      }
  }
  
  let K = k % 26;
  let rotated = alpa.slice(K) + alpa.slice(0, K + 1);
  
  let answer = '';
  
  for (let i = 0; i < s.length; i++) {
      if (rotated.indexOf(rotated[idx[i]]) !== -1) {
          answer += rotated[idx[i]];
      } else {
          answer += idx[i];
      }
  }
  
  // console.log(answer);   
  return answer;
}