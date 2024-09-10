//Dom buttoms
let BtnIncome = document.getElementById('btn_income');
let BtnExpense = document.getElementById('btn_expenses');

//tbodies tables
// let tBodyIncomes = document.getElementById('tbody-incomes');
// let tBodyExpenses = document.getElementById('tbody-expenses');

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

    let inputnama = document.getElementById('input-nama').value;
    let inputsaldo = document.getElementById('input-saldo').value;


    let id;
    if(transactions.incomes.length === 0){
        id = 1;  //jika array kosong, id awal adalah 1  sebagai id baru  disetiap kali button add income di tekanu pertama kali
    }else{
        id = transactions.incomes[transactions.incomes.length - 1].id + 1;  //mengambil id terakhir + 1 sebagai id baru
    }
    let tempObjk = {
        id ,
        transaksiInc : inputnama,
        saldoInc  : inputsaldo
    }
    transactions.incomes.push(tempObjk);
    getFunctions();
    saldoCount();

    // inputnama.value = '';
    // inputsaldo.value = '';

    alert(`${inputnama}`+ " berhasil ditambahkan sebagai income");
}

function addExpenseHandler(){
    let inputnama = document.getElementById('input-nama').value;
    let inputsaldo = document.getElementById('input-saldo').value;

    let id;
    if(transactions.expenses.length === 0){
        id = 1;  //jika array kosong, id awal adalah 1  sebagai id baru  disetiap kali button add income di tekanu pertama kali
    }else{
        id = transactions.expenses[transactions.expenses.length - 1].id + 1;  //mengambil id terakhir + 1 sebagai id baru
    }
    let tempObjk = {
        id ,
        transaksiExp: inputnama,
        saldoExp  : inputsaldo
    }

    transactions.expenses.push(tempObjk);
    getFunctions();
    saldoCount();

    // inputnama.value = '';
    // inputsaldo.value = '';

    alert(`${inputnama}`+ " berhasil ditambahkan sebagai expense");
}

function getFunctions(){
    let tBodyIncomes = document.getElementById('tbody-incomes');
    let tBodyExpenses = document.getElementById('tbody-expenses');

    tBodyIncomes.innerHTML = '';
    tBodyExpenses.innerHTML = '';

    transactions.incomes.forEach(inc => {
        tBodyIncomes.innerHTML += `<tr>
        <td>${inc.id}</td>
        <td>${inc.transaksiInc}</td>
        <td>${inc.saldoInc}</td>
        </tr>`
    })
    transactions.expenses.forEach(exp => {
        tBodyExpenses.innerHTML += `<tr>
        <td>${exp.id}</td>
        <td>${exp.transaksiExp}</td>
        <td>${exp.saldoExp}</td>
        </tr>`
    })
}

function saldoCount(){
    let saldoIncome = 0;
    let saldoExpense = 0;

    transactions.incomes.forEach(inc => {
        saldoIncome += +inc.saldoInc;
    })
    transactions.expenses.forEach(exp => {
        saldoExpense += +exp.saldoExp;
    })

    let saldoTotal = saldoIncome - saldoExpense;
    let saldoElement = document.getElementById('saldo-value');

    saldoElement.innerHTML = saldoTotal;  //menampilkan saldo total ke element id saldo-value di html  secara real-time  setiap ada perubahan data di array transactions.incomes dan transactions.expenses  (seperti addIncomeHandler dan addExpenseHandler)  karena saldoCount dipanggil di function ini  setiap kali saldo total diubah  sehingga saldo total di

}

getFunctions();
saldoCount();
