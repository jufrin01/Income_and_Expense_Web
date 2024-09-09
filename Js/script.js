//Dom buttoms
let BtnIncome = document.getElementById('btn_income');
let BtnExpense = document.getElementById('btn_expenses');

//tbodies tables
let tBodyIncomes = document.getElementById('tbody-incomes');
let tBodyExpenses = document.getElementById('tbody-expenses');

//add event listeners

BtnIncome.addEventListener('click', addIncomeHandler);
BtnExpense.addEventListener('click', addExpenseHandler);

//global variebel

let transactions = {
    incomes: [],
    expenses: []

}

//Functions
function addIncomeHandler(){
    let incomeValue = document.getElementById('input-nama');
    let expenseValue = document.getElementById('input-saldo');
    let id;
    if(transactions.incomes.length === 0){
        id = 1;  //jika array kosong, id awal adalah 1  sebagai id baru  disetiap kali button add income di tekanu pertama kali
    }else{
        id = transactions.incomes[transactions.incomes.length - 1].id + 1;  //mengambil id terakhir + 1 sebagai id baru
    }
    let tempObjk = {
        id ,
        transakai : incomeValue.value,
        saldo  : +expenseValue.value
    }
    transactions.incomes.push(tempObjk);
    console.log('add income');
    console.log(transactions);
}

function addExpenseHandler(){
    let incomeValue = document.getElementById('input-nama');
    let expenseValue = document.getElementById('input-saldo');
    let id;
    if(transactions.expenses.length === 0){
        id = 1;  //jika array kosong, id awal adalah 1  sebagai id baru  disetiap kali button add income di tekanu pertama kali
    }else{
        id = transactions.incomes[transactions.incomes.length - 1].id + 1;  //mengambil id terakhir + 1 sebagai id baru
    }
    let tempObjk = {
        id ,
        transakai : incomeValue.value,
        saldo  : +expenseValue.value
    }
    transactions.expenses.push(tempObjk);
    console.log(transactions);
    console.log('add expense');
}