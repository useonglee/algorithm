// TODO: 1425번

function backspaceCompare(S, T) {
  // 문자열에서 #은 backspace를 뜻한다.
  // #을 통해 문자를 삭제하고 S와 T가 같으면 true

  // 수도 코드
  // 1. #이 있으면 바로 전 문자를 지워준다.
  // 2. 그리고 더 이상 지울 문자가 없으면 남은 #을 다 지워준다.
  // 3. S와 T를 비교한다.

  const isBackspace = (str) => {
      let answer = [str[0]];

      for (let i = 1; i < str.length; i++) {
          if (str[i] === '#') {
              answer.pop();
          } else {
              answer.push(str[i]);
          }
      }
      answer = answer.join('');
      const sharp = answer.indexOf('#');

      if (sharp !== -1) {
          answer = answer.replace(answer[sharp], '');
      }

      return answer;
  }

  return isBackspace(S) === isBackspace(T) ? true : false;
}