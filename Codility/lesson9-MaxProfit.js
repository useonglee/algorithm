// TODO: Codility - lesson 9: MaxProfit

function solution(A) {
  // A 배열은 데일리 주식 가격을 포함하고 있다.
  // P에 사고 Q에 팔면 A[Q] - A[P] 거래가 이루어진다.
  // 반대로 A[P] - A[Q]가 되면 잃는다.
  // 가장 쌀 때 사고, 가장 비쌀때 팔아야 한다.
  // 가장 많은 이익을 남길 수 있는 금액을 반환한다.
  // 만약 이익을 남길 수 없는 상황이면 0을 반환한다.

  if (A.length === 1) return A[0];

  let maxProfit = 0;
  let buyStock = A[0];

  for (let i = 1; i < A.length; i++) {
      const profit = A[i] - buyStock;
      buyStock = Math.min(buyStock, A[i]);
      
      maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit < 0 ? 0 : maxProfit;
}