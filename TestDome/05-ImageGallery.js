// TODO: TestDome - Image Gallery
// https://www.testdome.com/questions/62212

function setup() {
  // remove 버튼을 클릭하면 부모 노드인 div를 제거하는 함수 구현
  // remove 버튼에 이벤트를 추가한다.
  
  const removeBtn = document.querySelectorAll(".remove");
  
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", (e) => {
      e.target.parentNode.remove();
    })
  }
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);