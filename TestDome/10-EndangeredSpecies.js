// TODO: TestDome - EndangeredSpecies
// https://www.testdome.com/questions/46758

function endangeredSpecies(continent, species) {
  // 'Near Threatened'을 찾아서 반환한다.
  
  const target = document
  .querySelector(`div [data-continent="${continent}"]`)
  .querySelector(`[data-species="${species}"]`).textContent;

  return target;
}

// Example case
document.body.innerHTML =
`<div>
  <ul data-continent="North America">
    <li data-species="California condor">Critically Endangered</li>
    <li data-species="American bison">Near Threatened</li>
  </ul>
  <ul data-continent="Europe">
    <li data-species="Cave bear">Extinct</li>
  </ul>
</div>`;

console.log(endangeredSpecies('North America', 'American bison')); 
// should print 'Near Threatened'