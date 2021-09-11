// TODO: 569번

function addDigits(num) {
  // 숫자가 일의 자리가 될 때 까지 더하는 문제

  while(num >= 10) {
      num = String(num).split('');
      num = num.reduce((acc, cur) => Number(acc) + Number(cur));
  }

  return num;
}