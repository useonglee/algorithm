// TODO: LintCode - 1282번

function reverseVowels(s) {
  // 문자열에서 자음의 반대인 모음이 있으면 모음끼리 위치를 바꾼다.
  // 투포인터 사용

  const isVowels = (str) => {
      return (str === 'a' || str === 'A' || str === 'e'
          || str === 'E' || str === 'i' || str === 'I'
          || str === 'o' || str === 'O' || str === 'u'
          || str === 'U');
  };

  let vowels = '';

  for (let i = 0; i < s.length; i++) {
      if (isVowels(s[i])) {
          vowels += s[i];
      }
  }
  // console.log(vowels);

  let answer = '';
  let idx = vowels.length - 1;

  for (let i = 0; i < s.length; i++) {
      if (isVowels(s[i])) {
          answer += vowels[idx];
          idx--;
      } else {
          answer += s[i];
      }
  }

  return answer;
}