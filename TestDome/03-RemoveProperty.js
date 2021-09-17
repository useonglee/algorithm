// TODO: TestDome - Remove Property
// https://www.testdome.com/questions/35859

function removeProperty(obj, prop) {
  // obj가 prop를 가지고 있으면 제거하고 true
  // 이외의 모든 케이스는 다 false를 반환한다.
  
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    
    return true;
  }
  
  return false;
}