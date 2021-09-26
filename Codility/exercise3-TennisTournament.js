// TODO: Codility - exercise 3: TennisTournament

// 정확도: 100%
function solution(P, C) {
  // 두 플레이어는 주어진 시간에 각 코트에서 한 번만 게임을 할 수 있다.
  // 동시에 가능한 가장 많은 게임을 시작하는 경우
  // 선수들의 수 P와 예약된 코트들의 수 C가 주어진다.
  // 동시에 가장 많이 게임을 할 수 있는 수를 반환한다.

  if (C * 2 < P) return C;

  else {
      while (C * 2 > P) {
          C--;
      }
  }

  return C;
}