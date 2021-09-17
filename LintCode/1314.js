// TODO: 1314.js

function isPowerOfTwo(n) {
  // 거듭제곱인지 확인하는 문제

  if (n === 1) return true;
  let isPow = 1;

  while (isPow <= n) {
      isPow = isPow * 2;
      
      if (isPow === n) {
          return true;
      }
  }

  return false;
}