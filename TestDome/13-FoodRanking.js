// TODO: TestDome - Food Ranking
// https://www.testdome.com/questions/46764

function setup() {
  // 버튼을 클릭하면 해당 아이템을 업다운 시킬 수 있다.
  // 모든 버튼을 불러오고 Up과 Down 버튼에 각각 이벤트를 부여한다.
  // Up 또는 Down 버튼 클릭 시, 한 단계 올라가거나 내려간다.

  const button = document.getElementsByTagName('button');

  for (let i = 0; i < button.length; i++) {
    // Up 버튼
    if (i % 2 === 0) {
      button[i].addEventListener('click', ({ target }) => {
        const parent = target.parentNode;
        const previous = parent.previousElementSibling;

        if (previous === null) return;
        parent.parentNode.insertBefore(parent, previous);
      })
    }

    // Down 버튼
    else {
      button[i].addEventListener('click', ({ target }) => {
        const parent = target.parentNode;
        const next = parent.nextElementSibling;

        if (next === null) return;
        parent.parentNode.insertBefore(next, parent);
      })
    }
  }
}

// Example case
document.body.innerHTML = `<ol>
  <li><button>Up!</button>Taco<button>Down!</button></li>
  <li><button>Up!</button>Pizza<button>Down!</button></li>
  <li><button>Up!</button>Eggs<button>Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName('button')[2].click();

console.log(document.body.innerHTML);