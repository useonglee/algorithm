// HackerRank - Fountain Activation

function fountainActivation(locations) {
  // max((i - locations[i], 1)), min((i + location[i]), n)
  // n 길이의 정원을 물로 덮기 위해 최소한의 숫자를 찾아야 한다.
  // 어느 분수에서 물을 뿌려야 정원을 다 덮을 수 있는지 찾아야 한다.
  
  // 수도 코드
  // 1. 각 포지션마다 max와 min을 객체로 저장한다.
  // 2. 현재 분수가 최대한 어디까지 뻗어 나가는지 체크한다.
  // 3. 최대한 뻗어나간 이후에 다시 또 분수를 뿌려야 한다면 분수를 추가한다. (dp 알고리즘)
  // 4. 분수로 인해 덮혀진 부분을 계속 저장해 나아간다.
  
  let N = locations.length;
  let dp = Array(N).fill(-1);
  
  let [left, right] = [0, 0];
  
  for (let i = 0; i < N; i++) {        
      left = Math.max((i - locations[i]), 0);
      right = Math.min((i + (locations[i] + 1)), N);
      
      dp[left] = Math.max(dp[left], right);
  }
  
  let fountain = 1;
  
  let covered = dp[0];
  let cur = 0;

  for (let i = 0; i < N; i++) {
      cur = Math.max(cur, dp[i]);
      
      if (i === covered) {
          covered = cur;
          fountain++;
      }
  }

  return fountain;
}