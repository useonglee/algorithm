// TODO: 433번

function numIslands(grid) {
  // DFS 문제
  // 1이 위/아래/왼쪽/오른쪽으로 인접해 있으면 하나의 섬으로 취급
  // 섬이 총 몇개 있는지 찾는 문제

  const dfs = (x, y) => {
      if (x <= -1 || x >= grid.length || y <= -1 || y >= grid[0].length) {
          return false;
      }

      if (grid[x][y] === 1) {
          grid[x][y] = 0;

          dfs(x - 1, y);
          dfs(x, y - 1);
          dfs(x + 1, y);
          dfs(x, y + 1);

          return true;
      }

      return false;
  }

  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (dfs(i, j)) {
              answer += 1;
          };
      }
  }

  return answer;
}