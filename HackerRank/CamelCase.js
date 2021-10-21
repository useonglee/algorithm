// HackerRank - CamelCase

function camelcase(s) {
  // Write your code here
  
  // 카멜케이스 단어를 찾아서 반환 하는 문제
  
  // 수도 코드
  // 1. 만약 대문자이면 그 뒤로 나오는 문자 저장
  // 2. 다시 대문자가 나온다면 현재 저장된 문자를 배열에 저장한다.
  // 2-1. 그리고 문자를 현재 문자로 초기화한다.
  // 3. 배열의 길이 + 1을 반환한다.
  // 3-1. 대문자가 아닌 첫 문자를 포함하기 위해 +1을 한다.

  let answer = [];
  
  let curLetter = '';
  let camelLetter = false;
  
  for (let i = 0; i < s.length; i++) {
      if (camelLetter && s[i].toUpperCase() === s[i]) {
          answer.push(curLetter);
          curLetter = s[i];
          continue;
      }
      
      if (s[i].toUpperCase() === s[i]) {
          camelLetter = true;
      }
      
      if (camelLetter) {
          curLetter += s[i];
      }
  }
  
  if (curLetter.length > 0) answer.push(curLetter);
  
  // console.log(answer)
  return answer.length + 1;
}