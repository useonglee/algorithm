// TODO: TestDome - Even Numbers
// https://www.testdome.com/questions/50773

<div id='numbers'>
 <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
 <button id='btn' onclick='toggleEvenColor()'>Toggle even number highlighting</button>
</div>

function toggleEvenColor() {
  // 모든 span을 불러온다.
  // forEach 익명 함수의 매개변수로 item을 넘겨준다.
  // backgroundColor가 yello이면 투명색으로 바꿔준다.
  
  let spanElements = document.querySelectorAll('#numbers span:nth-child(2n)');
  
  spanElements.forEach((item) => {
    item.style.backgroundColor !== 'yellow' ? 'yellow' : 'transparent';
  });
}