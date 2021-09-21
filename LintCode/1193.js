// TODO: LintCode - 1193번

function detectCapitalUse(word) {
  // 문자 사용법의 규칙에 맞게 사용한지 확인한다.
  // 1. 모든 문자열이 대문자이다.
  // 2. 모든 문자열이 소문자이다.
  // 3. 문자가 2개 이상인 경우, 첫번째문자만 대문자이다.
  // 4. 그렇지 않으면 false;

  if (word === word.toUpperCase()) return true;
  if (word === word.toLowerCase()) return true;

  // 첫번째만 대문자인 경우
  if (word[0] === word[0].toUpperCase()) {
    for (let i = 1; i < word.length; i++) {
      if (word[i] !== word[i].toLowerCase()) return false;
    }
  }
  
  return false;
}