// TODO: TestDome - Topic Coloring
// https://www.testdome.com/questions/59267

function newMessage(topicName) {
  // 해당 토픽 이름을 가진 data 태그에 배경화면 색깔을 추가한다.
  // 다른 토픽 이름들은 무시한다.

  // 수도 코드
  // 1. 모든 p태그를 가져온다.
  // 2. 반복문을 통해 data topic name을 찾는다.
  // 3. 해당 태그에 스타일을 부여한다.

  const p = document.getElementsByTagName('p');

  for (let i = 0; i < p.length; i++) {
    if (p[i].dataset.topicName === topicName) {
      p[i].style.backgroundColor = "red";
    }
  }
}

// Example case
document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;
newMessage("discussion");
console.log(document.body.innerHTML);