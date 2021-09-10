// TODO: 1358번

function pathSum(root, sum) {
  // 이진 트리, DFS 문제
  // root에서 leaf까지의 합이 sum과 같으면 true를 반환
  // 왼쪽과 오른쪽을 나눠서 재귀함수를 실행한다.
  // sum에서 node들을 빼면서 0이 되면 true를 반환
  // leaf가 있는 뎁스까지 0이 나오지 않으면 무조건 false

  if (root === null) return false;

  let curVal = sum - root.val;

  if (root.left === null && root.right === null) {
      if (curVal === 0) return true;
      return false;
  }

  return pathSum(root.left, curVal) || pathSum(root.right, curVal);
}