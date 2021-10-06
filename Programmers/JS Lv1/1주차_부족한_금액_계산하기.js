// [문제](https://programmers.co.kr/learn/courses/30/lessons/82612)

function solution(price, money, count) {
  // count만큼 기구를 탈 수 있으며, N번째는 N * price원이 필요
  // 기구를 타기 위해 필요한 금액을 반환
  // 부족한 금액이 없으면 0을 반환한다.

  let total = 0;
  
  while (count > 0) {
      total += price * count;
      count--;
  }
  
  let answer = total - money;

  return answer > 0 ? answer : 0;
}