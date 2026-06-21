const title = document.querySelector("#description");
const amount = document.querySelector("#amount");
const addExpenseBtn = document.querySelector("#addBtn");
const expenseForm = document.querySelector("#expenseForm");
const expenseTotal = document.querySelector("#total");
const expenseTable = document.querySelector("#transTable");

let expenses = [];

function addExpenses(e) {
  e.preventDefault();

  if (!title.value.trim() || !amount.value) {
    alert("Please fill all fields");
    return;
  }

  let newExpenses = {
    id: Date.now(),
    description: title.value.trim(),
    amount: Number(amount.value),
  };

  expenses.push(newExpenses);

  title.value = "";
  amount.value = "";

  renderExpenses();
  updateTotal();
}

expenseForm.addEventListener("submit", (e) => addExpenses(e));

function renderExpenses() {
  expenseTable.innerHTML = "";
  expenses.forEach((expense) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${expense.description}</td>
        <td>$${expense.amount}</td>
        <td><button onclick="deleteExpenses(${expense.id})">Delete</button></td>
        `;
    expenseTable.appendChild(tr);
  });
}

function updateTotal() {
  let total = 0;
  expenses.forEach((expense) => {
    total += Number(expense.amount);
  });
  expenseTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

function deleteExpenses(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  renderExpenses();
  updateTotal();
}
