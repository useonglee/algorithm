// TODO: TestDome - Ensure
// https://www.testdome.com/questions/35586

function ensure(value) {
  // 인수값이 없거나 undefined이면 Error를 throw 한다.
  // 그렇지 않으면, 주어진 value를 반환.
  
  if (value !== undefined) return value;
  
  throw 'Error';
}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}