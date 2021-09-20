// TODO: LintCode - 1225번

function islandPerimeter(grid) {
  // 2D 배열에서 1은 섬, 0은 바다를 나타낸다.
  // 섬의 둘레를 구하는 문제

  // 수도 코드
  // 1. 1의 모든 면적에서 겹치는 부분을 뻬준다.
  // 2. 1의 면적은 1의 모든 개수 * 4를 하면 된다.
  // 3. 1이 사방면으로 겹칠때마다 빼준다. 

  let M = grid.length;
  let N = grid[0].length;

  let perimeter = 0;
  let overlap = 0;

  for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
          if (grid[i][j] === 1) {
              perimeter++;

              if (i + 1 < M && grid[i + 1][j] === 1) overlap++;

              if (j + 1 < N && grid[i][j + 1] === 1) overlap++;
          }
      }
  }

  return perimeter * 4 - overlap * 2;
}