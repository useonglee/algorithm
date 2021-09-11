// TODO: 209번

function firstUniqChar(str) {
  // 첫번째로 유니크한 문자 찾기

  let hash = {};

  for (let i = 0; i < str.length; i++) {
      if (hash[str[i]] === undefined) {
          hash[str[i]] = 0;
      }

      hash[str[i]]++;
  }

  for (let char in hash) {
      if (hash[char] === 1) {
          return char;
      }
  }
}