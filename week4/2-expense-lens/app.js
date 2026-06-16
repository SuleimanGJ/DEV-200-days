const title = document.querySelector("#title");
const amount = document.querySelector("#amount");
const category = document.querySelector("#category");
const addBtnExpense = document.querySelector("#addExpense");
const expenseForm = document.querySelector("#expenseForm");
const expensesContainer = document.querySelector(".expensesContainer");


let expenses = [];

function loadExpenses() {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      expenses = JSON.parse(storedExpenses);
    }
    renderExpenses();
    updateTotal();
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpenses(e) {
    e.preventDefault();
    let newExpenses = {
        id: Date.now(),
        title: title.value,
        amount: amount.value,
        category: category.value,
    }
    expenses.push(newExpenses);
    saveExpenses();
    renderExpenses();
    updateTotal();
}


function deleteExpenses() {}


function renderExpenses() {
    expensesContainer.innerHTML = "";
}


function updateTotal() {}


expenseForm.addEventListener("submit", addExpenses);
loadExpenses()
console.log(expenses)