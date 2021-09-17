// TODO: TestDome - Check Digit
// https://www.testdome.com/questions/30696

function createCheckDigit(membershipId) {
  // 한자리 숫자가 될 때 까지 계속 합산한다.

  if (membershipId.length === 1) return membershipId;
  
  let answer = 0;
  
  while(membershipId.length !== 1) {
    membershipId = membershipId.split('').reduce((acc, cur) => {
      return String(Number(acc) + Number(cur));
    });
    
    answer = membershipId;
  }
  
  return answer;
}

console.log(createCheckDigit("55555")); 
// 7

console.log(createCheckDigit("5"));
// 5