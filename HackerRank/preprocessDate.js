// HackerRank - preprocessDate

function preprocessDate(dates) {
  // 주어진 날짜를 표준 날짜로 표시하도록 변환해야 한다.
  
  // 수도 코드
  // 1. 주어진 배열을 반복문으로 돌면서 요소들을 split 한다.
  // 2. 년도는 그대로 가져온다.
  // 3. 월은 객체로 만들어서 가져온다.
  // 4. 일은 숫자만 가져온다. (정규 표현식)
  // 4-1. 숫자가 10보다 작으면 0을 붙혀주어야 함
  // 5. split한 요소들을 위 과정을 거치고 난 후에 새로운 배열에 담아준다.
  
  const months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
  }
  
  const convertDate = (date) => {
      let year = date[2];
      let month = months[date[1]];
      let day = '';
      
      for (let i = 0; i < date[0].length; i++) {
          if (date[0][i].match(/[0-9]/g)) {
              day += date[0][i];
          }
      }
      
      if (day.length === 1) {
          day = `0${day}`;
      }
      
      return `${year}-${month}-${day}`;     
  }
  
  const answer = [];
  
  for (let i = 0; i < dates.length; i++) {
      dates[i] = dates[i].split(' ');
      answer.push(convertDate(dates[i])); 
  }
  
  return answer;
}

/**
<input>
20th Oct 2052 
6th Jun 1933               
26th May 1960
20th Sep 1958
16th Mar 2068
25th May 1912
16th Dec 2018
26th Dec 2061
4th Nov 2030
28th Jul 1963

<output>
2052-10-20
1933-06-06
1960-05-26
1958-09-20
2068-03-16
1912-05-25
2018-12-16
2061-12-26
2030-11-04
1963-07-28
 */