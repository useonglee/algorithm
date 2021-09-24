// TODO: Codility - exercise 5: ThreeLetters

// 정확도: 100%
function solution(A, B) {
  // a 또는 b가 3번 이상 연속으로 같으면 안된다. "aaa", "bbb" 금지
  // A의 수에 맞게 a를, B의 수에 맞게 b를 문자열로 만든다.
  // 해당 문자열을 반환한다.

  // 수도 코드
  // 1. A >= B 라면 a부터 시작한다.
  // 2. 카운트를 통해 3이 넘어가지 않게 a나 b를 반복한다.
  // 3. 객체를 통해 현재 A와 B의 값을 저장한다.
  // 4. 현재 값이 a이고 카운트가 3미만이면 a를 한번 더 추가한다.
  // 5. 4번과 같은 형태로 반복문을 진행한다.
  // 6. 카운트가 3이 되기 직전에 카운트를 초기화하고 a라면 b로 넘어간다.
  // 7. a 문자를 추가할 때마다 A를 감소한다.

  if (A === 0 && B === 0) return "";

  let S = {"A": A, "B": B};
  let cur = A >= B ? "A" : "B";
  let answer = "";
  let count = 0;

  for (let i = 0; i < A + B; i++) {
      if (cur === "A") answer += "a";
      else answer += "b";

      S[cur]--;
      count++;

      // 주어진 값을 다 활용했을 경우
      if (S["A"] === 0) {
          cur = "B";
          continue;
      }

      if (S["B"] === 0) {
          cur = "A";
          continue;
      }

      // 다음 값 지정과 함께 카운트 초기화
      let next = S["A"] >= S["B"] ? "A" : "B";
      if (next !== cur) {
          cur = next;
          count = 0;
      }

      // 만약 2번 입력이 되었으면 다른 값으로 바꾼다.
      if (count === 2) {
          cur = cur === "A" ? "B" : "A";
          count = 0;
      }
  }

  return answer;
}