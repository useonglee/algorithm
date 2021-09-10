function convertToTitle(n) {
  // 1부터 26까지 A to Z로 변경한다.
  // 27부터 52까지 AA to AZ로 변경한다.
  // 이런식으로 숫자가 주어지면 엑셀 시트처럼 변경한다.

  const alpa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = '';

  while (n > 0) {
      let column = Math.floor(n / 26);
      let remain = n % 26;
      // console.log(column, remain);
      
      if (remain === 0) {
          answer += 'Z';
          n = column - 1;
      }
      
      else {
          answer += alpa[remain - 1];
          n = column;
      }
      // console.log(n, answer, remain, column);
  }

  return answer.split('').reverse().join('');
}