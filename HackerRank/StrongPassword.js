// HackerRank - Strong Password

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  
  // 엄격한 패스워드로 되어있다.
  // 길이는 적어도 6이상, 적어도 하나의 숫자 포함
  // 적어도 하나의 소문자와 대문자 그리고 특수문자(!@#$%^&*()-+)가 있어야 함
  // 최소한 몇개의 문자가 더 있어야 패스워드를 만들 수 있는지 찾는다.
  // 미니멈 카운트 반환

  // console.log(minimumNumber(7, AUzs-nV)) 답: 1
  
  let checkCriteria = {
      low: 0,
      up: 0,
      digit: 0,
      special: 0,
  }
  
  for (let i = 0; i < n; i++) {
      if (password[i].match(/[a-z]/g)) {
          checkCriteria['low'] = 1;
      } else if (password[i].match(/[A-Z]/g)) {
          checkCriteria['up'] = 1;
      } else if (password[i].match(/[0-9]/g)) {
          checkCriteria['digit'] = 1;
      } else if (password[i].match(/[!@#$%^&*()\-\+]/g)) {
          checkCriteria['special'] = 1;
      }
  }
  
  let answer = Object.values(checkCriteria).filter(v => v === 0).length;
  answer = answer + n > 5 ? answer : answer + (6 - (answer + n));

  return answer;
}