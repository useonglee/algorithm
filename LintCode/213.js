// TODO: 213번

function compress(str) {
  // 문자열 압축문제
  // 만약 압축했는데 원래 문자열이랑 길이가 같다면 압축 X

  if (str === "") return "";

  let count = 1;
  let answer = '';

  for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === str[i]) {
          count++;
      } else {
          answer += str[i - 1] + count;
          count = 1;
      }
  }

  answer += str[str.length - 1] + count;

  return answer.length >= str.length ? str : answer;
}