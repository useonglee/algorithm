// TODO: Codility - exercise 4: TreeHeight

// 정확도: 100%
function solution(T) {
  // 이진 트리는 비어있거나 노드가 있다.
  // 이진 트리의 높이는 가장 길게 통과한 길이를 뜻한다.
  // 하나의 노드가 있는 높이는 0, 없으면 -1을 뜻한다.
  // 트리의 높이를 반환한다.
  // x: 노드, l: 왼쪽 자식노드, r: 오른쪽 자식 노드
  // 재귀를 통해서 답을 찾는다.
  // console.log(T);

  const maxHeight = (T, H) => {
      let [leftH, rightH] = [0, 0];

      if (T.l !== null) {
          leftH = maxHeight(T.l, H + 1);
      }

      if (T.r !== null) {
          rightH = maxHeight(T.r, H + 1);
      }

      if (T.l !== null || T.r !== null) {
          return Math.max(leftH, rightH);
      } else {
          return H;
      }
  }

  return maxHeight(T, 0);
}