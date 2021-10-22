// HackerRank - Two Strings

function twoStrings(s1, s2) {
  // Write your code here
  // 두 문자열을 비교해서 같은 substring이 존재하는지 찾는 문제이다.
  // 두 문자열중에 하나라도 같은 문자가 있으면 YES를 반환한다.
  
  let hash = {};
  
  for (let i = 0; i < s1.length; i++) {
      hash[s1[i]] = (hash[s1[i]] || 0) + 1;
  }
  
  for (let i = 0; i < s2.length; i++) {
      if (s2[i] in hash) {
          return 'YES';
      }
  }
  
  return 'NO';
}