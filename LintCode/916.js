// TODO: 916번

function canPermutePalindrome(s) {
  // 첫번째 시도에 시간 초과되서 풀지 못하였다.
  // 구글링을 통해 효율적인 코드를 찾고 공부함

  const charSet = new Set();

  s.split('').forEach(char => {
      if (charSet.has(char)) {
          charSet.delete(char);
      } else {
          charSet.add(char);
      }
  });

  return charSet.size <= 1;
}

function canPermutePalindrome(s) {
  // 첫번째 시도
  // 주어진 문자열을 순열로 만들어서 팰린드롬이 가능하면 true
  // 문자열 순열을 배열에 저장한다.
  // 배열을 순회하면서 팰린드롬을 찾는다.

  const arr = s.split('');
  
  const getPermute = (arr, n) => {
      const result = [];
      if (n === 1) return arr.map(v => [v]);

      arr.forEach((fixed, index, origin) => {
          const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
          const combi = getPermute(rest, n - 1);
          const attached = combi.map(com => [fixed, ...com].join(''));
          result.push(...attached);
      });

      return result;
  }

  const result = getPermute(arr, arr.length);
  // console.log(result);

  const isPalindrome = (str) => {
      for (let [i, len] = [0, str.length / 2]; i <= len; i++) {
          if (str[i] !== str[str.length - 1 - i]) {
              return false;
          }
      }

      return true;
  }

  for (let i = 0; i < result.length; i++) {
      if (isPalindrome(result[i])) {
          return true;
      }
  }

  return false;
}

