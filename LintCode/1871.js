// TODO: 1871번

function MaximumMoment(time) {
  // 시간이 주어지고 ?로 일부가 가려진다.
  // ?를 숫자로 바꿨을 때, 맥시멈 시간을 구한다.

  time = time.split(':');

  let hour = time[0];
  let minute = time[1];

  if (hour[0] === '?') {
      if (Number(hour[1]) > 3) {
          hour = '1' + hour[1];
      } else {
          hour = '2' + hour[1];
      }
  }

  if (hour[1] === '?') {
      if (hour[0] === '2' || hour[0] === '?') {
          hour = '23';
      } else {
          hour = hour[0] + '9';
      }
  }

  if (minute[0] === '?') {
      minute = '5' + minute[1];
  }

  if (minute[1] === '?') {
      minute = minute[0] + '9'
  }

  return `${hour}:${minute}`;
}