// TODO: TestDome - Loop
// https://www.testdome.com/questions/52488

function appendChildren(decorateDiv) {
  // Fix the bugs
  
  let allDivs = [...document.getElementsByTagName("div")];

  for (let i = 0; i < allDivs.length; i++) {
    let newDiv = document.createElement("div");
    
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

appendChildren(function(div) {});
console.log(document.body.innerHTML);