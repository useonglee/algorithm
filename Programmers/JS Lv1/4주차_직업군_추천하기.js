// [문제](https://programmers.co.kr/learn/courses/30/lessons/84325)

function solution(table, languages, preference) {
  // 총합이 같으면 사전순으로 나열한다.
  // 이후에 가장 빠른 직업군을 반환한다.
  
  // 수도 코드
  // 1. table을 hash구조로 만들어준다. 각 인덱스의 0은 직업군이며,
  // 그 이후는 점수 순서대로 나열된다.
  // 2. 해당 직업군의 목록을 돌면서 주어진 언어가 있으면 preference에 따라 계산한다.
  // 3. 점수를 hash에 저장한다.
  // 4. 점수에 따라 hash 값을 정렬한다.
  // 5. 정렬하고 맨 첫번째 key값을 반환한다.
  
  let hash = {};
  
  for (let i = 0; i < table.length; i++) {
      table[i] = table[i].split(' ');
      let lists = table[i].slice(1);
      
      for (let j = 0; j < lists.length; j++) {
          let curTotal = 0;
          for (let k = 0; k < languages.length; k++) {
              if (lists[j] === languages[k]) {
                  curTotal += (lists.length - j) * preference[k];
                  console.log(lists[j], languages[k])
                  hash[table[i][0]] = curTotal;
              }
          }
      }
      
      hash[table[i][0]] = table[i].slice(1);
  }
  console.log(hash);
  
  let answer = Object.values(hash).sort();
  
  return answer[0];
}