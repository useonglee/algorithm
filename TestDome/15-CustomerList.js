// TODO: TestDome - Customer List
// https://www.testdome.com/questions/49798

function showCustomers(customers, targetList) {
  // 먼저 고객들의 이름을 렌더링한다.
  // 고객들의 이름을 클릭하면 고객의 이메일이 나온다.
  // 다시 클릭하면 이메일이 사라지도록 구현한다.(토글 기능 구현)

  const showCustomerEmail = (customer, customerInfo, li) => {
    customer.addEventListener("click", ({ target }) => {
      // email이 노출되어 있는지 확인
      if (target.nextElementSibling !== null) {
        li.removeChild(li.lastElementChild);
      } else {
        // email을 보여준다.
        const p = document.createElement("p");
        p.textContent = customerInfo.email;
  
        li.appendChild(p);
      }
    });
  }

  for (let i = 0; i < customers.length; i++) {
    const li = document.createElement("li");
    const customer = document.createElement("p");
    customer.textContent = customers[i].name;

    li.appendChild(customer);
    targetList.append(li);

    showCustomerEmail(customer, customers[i], li);
  }
}

document.body.innerHTML = `
<div>
  <ul id="customers">
  </ul>
</div>
`;
let customers = [{name: "John", email: "john@example.com"},
                 {name: "Mary", email: "mary@example.com"}];
showCustomers(customers, document.getElementById("customers"));

let customerParagraph = document.querySelectorAll("li > p")[0];
if(customerParagraph) {
  customerParagraph.click();
}
console.log(document.body.innerHTML);