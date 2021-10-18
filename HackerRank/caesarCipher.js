// HackerRank - caesarCipher

function caesarCipher(s, k) {
  // Write your code here
  // 원래 알파벳 순서에서 k만큼 로테이션을 한다.
  // 그리고 주어진 문자열의 인덱스를 로테이션된 알파벳 순서대로 다시 배치한다.
  // 재배치된 문자열을 반환한다.
  // 문자열이 대문자인지 소문자인지도 체크해야 한다.
  // 문자열이 아닌 요소도 체크해야 한다.
    
  // 수도 코드
  // 1. 주어진 문자열이 원래의 알파벳 순서에서 몇 번째로 위치하는 알파벳인지 찾는다.
  // 2. 원래의 알파벳 순서를 k만큼 로테이션해서 위치를 바꾼다.
  // 3. 1번에서 구했던 인덱스대로 다시 문자열을 재배치한다.
  // 3-1. 문자열이 대문자라면 인덱스를 따로 저장한다.
  // 3-2. 문자열이 아닌 요소라면 빈 문자열로 처리하고, 따로 저장해준다.
  // 4. 재배치된 문자열을 반환한다.
  // 4-1. 대문자 요소들과 문자열이 아닌 요소도 다시 재배치해준다.
  
  if (k === 0) return s;

  let alpa = 'abcdefghijklmnopqrstuvwxyz';
  
  let idx = [];
  let upper = [];
  let nonAlpa = [];
  
  // 초기 문자열들의 위치 체크
  // 대문자와 문자가 아닌 요소 체크
  for (let i = 0; i < s.length; i++) {
      if (alpa.indexOf(s[i]) !== -1) {
          idx.push(alpa.indexOf(s[i]));
      } 
      
      else {
          if (alpa.indexOf(s[i].toLowerCase()) !== -1) {
              idx.push(alpa.indexOf(s[i].toLowerCase()));
              upper.push(i);
          } else {
              idx.push('');
              nonAlpa.push(s[i]);
          }
      }
  }

  // 알파벳 로테이션
  let K = k % 26;
  let rotated = alpa.slice(K) + alpa.slice(0, K + 1);
  
  let answer = [];
  
  // 문자열 재배치
  for (let i = 0; i < s.length; i++) {
      const curIndex = rotated.indexOf(rotated[idx[i]]);

      if (curIndex !== -1) {
          answer.push(rotated[idx[i]]);
      } else {
          answer.push(idx[i]);
      }
  }
  
  // 대문자 재배치
  for (let i = 0; i < upper.length; i++) {
      answer[upper[i]] = answer[upper[i]].toUpperCase();
  }
  
  // 문자가 아닌 요소 재배치
  let count = 0;
  for (let i = 0; i < answer.length; i++) {
      if (answer[i] === '') {
          answer[i] = nonAlpa[count];
          count++;
      }
  }
  
  return answer.join('');
}