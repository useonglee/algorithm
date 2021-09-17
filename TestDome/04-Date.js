// TODO: TestDome - Data
// https://www.testdome.com/questions/8521

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  // 월, 일이 한 자리일 경우도 고려한다.
  
  const N = userDate.split('/');

  const Y = N[2];
  const M = N[0].length === 1 ? `0${N[0]}` : `${N[0]}`;
  const D = N[1].length === 1 ? `0${N[1]}` : `${N[1]}`;
  
  return Y + M + D;  
}

console.log(formatDate("12/31/2014"));