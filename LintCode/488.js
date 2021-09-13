// TODO: 488번

function isHappy(n) {
  // 주어진 숫자를 자리수 별로 2를 곱한다.
  // 1이 될 때까지 진행한다.
  // 1이 나오면 true, 그렇지 않으면 false
  // loop에서 나왔던 숫자가 또 나오면 false

  let data = [];

  while(n !== 1) {
      n = String(n).split('').map(v => Math.pow(Number(v), 2));
      n = n.reduce((acc, cur) => acc + cur);
      
      if (data.includes(n)) {
          return false;
      }

      data.push(n);
  }

  return true;
}