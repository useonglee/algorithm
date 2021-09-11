// TODO: 423번

function isValidParentheses(s) {
  // 괄호 유효성 문제
  // O(n)으로 풀어야 함
  // stack 활용하기

  let stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') stack.push(')');
      else if (s[i] === '[') stack.push(']');
      else if (s[i] === '{') stack.push('}');
      else {
          if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
              return false;
          }

          stack.pop();
      }
  }

  return stack.length === 0 ? true : false;
}