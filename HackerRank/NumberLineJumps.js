// HackerRank - Number Line Jumps

function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  // x1에서 v1만큼 점프한다.
  // x2에서 v2만큼 점프한다.
  // 같은 위치에서 만날 수 있으면 YES, 아니면 NO를 반환한다.
  // 두번째가 더 앞에 있으면서 더 멀리 뛴다면 NO를 반환
  
  if (x2 > x1 && v2 >= v1) return 'NO';
  
  while (x1 < x2) {
      x1 += v1;
      x2 += v2;
      
      if (x1 === x2) return 'YES';
  }
  
  return 'NO';
}