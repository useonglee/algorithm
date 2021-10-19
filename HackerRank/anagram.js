// HackerRank - anagram

function anagram(s) {
  // Write your code here

  // 문자열의 길이가 홀수이면 -1을 반환한다.
  // 문자열을 a, b로 나누고 a와 b가 서로 아나그램이 되려면
  // a에서 몇 개의 문자를 바꿔야하는지 찾는 문제이다.

  // 수도 코드
  // 1. 문자열을 반으로 나눈다.
  // 2. 반으로 나눈 문자열을 두 개의 해쉬로 만든다.
  // 3. 만약 b의 문자가 a에 있다면 a의 개수 - b의 개수를 해준다.
  // 4. 0이상이면 그 숫자만큼 바꿔야 하는 문자들이다.
  // 5. 0 이상인 숫자들을 더해서 반환한다.
  
  if (s.length % 2 !== 0) return -1;
  
  let left = s.slice(0, s.length / 2);
  let right = s.slice(s.length / 2).split('');
  
  // 왼쪽 해쉬에 왼쪽 문자열과 개수를 담아준다.
  let leftHash = {};
  for (let i = 0; i < left.length; i++) {        
      leftHash[left[i]] = (leftHash[left[i]] || 0) + 1;
  }
  
  // 오른쪽 해쉬에 오른쪽 문자열과 개수를 담아준다.
  let rightHash = {};
  for (let i = 0; i < right.length; i++) {        
      rightHash[right[i]] = (rightHash[right[i]] || 0) + 1;
  }
  
  // 오른쪽 문자가 왼쪽에 있다면 그 수만큼 빼준다.
  for (let el in leftHash) {
      if (el in rightHash) {
          leftHash[el] = leftHash[el] - rightHash[el]; 
      }
  }
  
  // 남아 있는 문자의 개수가 바꿔야 할 문자들이다.
  let answer = 0;
  
  for (let el in leftHash) {
      if (leftHash[el] <= 0) continue;
      
      answer += leftHash[el];
  }
  
  return answer;
}