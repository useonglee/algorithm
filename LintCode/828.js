// TODO: 828번

function wordPattern(pattern, str) {
  // pattern의 문자 패턴과 str 문자의 패턴이 일치하면 true
  
  str = str.split(' ');

  let hash = {};

  for (let i = 0; i < str.length; i++) {
      if (hash[pattern[i]] === undefined) {
          if (Object.values(hash).includes(str[i])) {
              return false;
          } else {
              hash[pattern[i]] = str[i];
          }

      } else {
          if (hash[pattern[i]] !== str[i]) {
              return false;
          }
      }
  }

  return true;
}