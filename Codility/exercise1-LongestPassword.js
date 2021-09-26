// TODO: Codility - exercise 1: LongestPassword

function solution(S) {
  // 오직 숫자알파벳의 문자열로 이루어져있다.
  // 짝수개의 문자열이 있어야 한다.
  // 홀수개의 숫자가 있어야 한다.
  // S의 문자열이 주어지면 최대한 긴 문자열로 패스워드를 통과해야 한다.
  // 문자열은 없어도 되지만, 숫자가 없으면 0개,즉 짝수로 간주된다.
  // 통과되는 문자열이 없으면 -1을 반환한다.
  
  S = S.split(' ');
  let answer = 0;

  for (let i = 0; i < S.length; i++) {
      if (isValid(S[i])) {
          answer = Math.max(answer, S[i].length);
      }
  }

  return answer === 0 ? -1 : answer;
}

function isValid(word) {
  let [letter, digit] = [0, 0];
  
  for (let i = 0; i < word.length; i++) {
      if (word[i].match(/[a-zA-Z]/g)) letter++;
      else if (word[i].match(/[0-9]/g)) digit++;
      else return false;
  }

  if (letter % 2 !== 0) return false;
  if (digit === 0 || digit % 2 === 0) return false;

  return true;
}