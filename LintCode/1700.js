// TODO: 1700번

function diStringMatch(S) {
  // I는 증가, D는 감소
  
  let inc = 0;
  let dec = S.length;

  let answer = [];

  for (let i = 0; i < S.length; i++) {
      if (S[i] === 'I') {
          answer.push(inc);
          inc++;
      } else {
          answer.push(dec);
          dec--;
      }
  }
  // console.log(answer, inc, dec);
  answer.push(inc);

  return answer;
}