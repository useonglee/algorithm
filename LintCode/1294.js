// TODO: 1294번

function isPowerOfThree(n) {
  // 세제곱근인지 확인하는 문제;
  if (n === 1) return true;

  let isThree = 1;

  while (isThree <= n) {
      isThree = isThree * 3;

      if (isThree === n) {
          return true;
      }
  }

  return false;
}