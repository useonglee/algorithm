// TODO: TestDome - Closest Relative
// https://www.testdome.com/questions/60695

function closestRelative(parent, relativeName) {
  // 부모 파라미터는 가장 가까운 자식 태그의 후손이 되어야 한다.
  // 가족 모두는 하나 또는 그 이상 자식의 부모가 될 수 있음.
  // 자식은 손자보다 부모와 관계가 가깝다.
  // 같은 세대에 자식들이 같은 이름이면, 트리의 첫번째 자식이 가까운 친척이다.
  // relative가 매칭이 안되면, Null을 반환한다.
  // 주어진 태그 네임을 반환하는 문제이다.
  // 가장 가까운 태그 네임을 반환한다.

  relativeName = relativeName.toUpperCase();
  const children = [...parent.children];

  while(children.length > 0) {
    let cur = children.shift();
    let curTagName = cur.tagName;

    // 가까운 태그 네임을 찾으면 반환한다.
    if (curTagName === relativeName) return cur;

    // 현재 태그가 자식을 가지고 있는지 확인한다.
    // 있으면 추가한다.
    if (!cur.hasChildNodes()) continue;

    for (let curChild of cur.children) {
      children.push(curChild);
    }
  }

  return null;
}

// Example case
document.body.innerHTML = 
'<James>' +
  '<Dave></Dave>' +
  '<Mike></Mike>' +
  '<Sarah></Sarah>' +
'</James>';

let parent = document.getElementsByTagName('James')[0];
let relative = closestRelative(parent, 'Mike');
console.log(relative && relative.tagName); // prints MIKE