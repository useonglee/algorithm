// [문제](https://programmers.co.kr/learn/courses/30/lessons/83201)

function solution(scores) {
  // 자신을 평가한 점수가 유일한 최고점, 최저점인지 찾는다.
  // 만약 조건이 맞다면 제외하고 평균을 구한다.
  // 각 인원수에 맞게 평균을 구하고 학점으로 변경한 후 반환한다.
  
  let answer = '';
  
  for (let i = 0; i < scores.length; i++) {
      let sum = 0;
      let max = -1;
      let min = 101;
      let count = scores.length;
      let selfScore = scores[i][i];
      let isCheck = true;
      
      for (let j = 0; j < scores[i].length; j++){
          if (i !== j && selfScore === scores[j][i]) {
              isCheck = false;
          }
          max = Math.max(max, scores[j][i]);
          min = Math.min(min, scores[j][i]);
          
          sum += scores[j][i];
      }
      
      // 최고점, 최저점이 유일한지 체크한다.
      if (isCheck && (max === selfScore || min === selfScore)) {
          count--;
          sum -=selfScore;
      }
      
      // 학점 계산
      answer += calGrades(sum / count);
  }
  
  return answer;
}

function calGrades(score) {
  if(score >= 90) return "A";
  else if(score >= 80) return "B";
  else if(score >= 70) return "C";
  else if(score >= 50) return "D";
  else return "F";
}