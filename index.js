let incomeButton = document.getElementById("incomeBtn")
let expenseButton = document.getElementById("expenseBtn")
let inputField = document.getElementById("inputField")
let numberField = document.getElementById("numberField")
let input = "";
let num = 0;

//where the total income will be disaplayed
let totalOfIncome = 0;
let totalIncome = document.querySelector(".income")

//where the total expense will be displayed
let totalOfExpenses = 0;
let totalExpense = document.querySelector(".expense")

//where the total balance will be displayed
let totalOfBalance = 0;
let balance = document.getElementById("balance")

//Validation for text input field
inputField.addEventListener('input',function(){
    input = this.value;

    if(input !== ""){
        if(num !== 0){
        incomeButton.disabled = false;
        expenseButton.disabled = false;
    }
    }else{
        incomeButton.disabled = true;
        expenseButton.disabled = true;
    }
    
})

//Validation for number input field
numberField.addEventListener('input',function(){
    num = this.value;
    if(num !== 0 && num !== ""){
        if(input !== ""){
        incomeButton.disabled = false;
        expenseButton.disabled = false;
    }
    }else{
        incomeButton.disabled = true;
        expenseButton.disabled = true;
    }
    if(this.value === ""){
        num = 0;
    }
})

//income button work
incomeButton.addEventListener('click',function(){
   
    totalOfIncome += parseInt(num);
    totalIncome.innerHTML = `<h2>Income : $ ${totalOfIncome}.00</h2>`
    balance.innerHTML = `<h2>Balance : $ ${totalOfIncome-totalOfExpenses}.00</h2>`
    AddIncomeElement(input,num);
    inputField.value = "";
    numberField.value = ""
    num = 0;
    input = ""
    incomeButton.disabled = true;
        expenseButton.disabled = true;
    
})

expenseButton.addEventListener('click',function(){
    
    totalOfExpenses += parseInt(num);
    totalExpense.innerHTML = `<h2>Expense : $ ${totalOfExpenses}.00</h2>`
    balance.innerHTML = `<h2>Balance : $ ${totalOfIncome-totalOfExpenses}.00</h2>`
    AddExpenseElement(input,num);
    inputField.value = "";
    numberField.value = ""
    num = 0;
    input = ""
    incomeButton.disabled = true;
        expenseButton.disabled = true;
})

//where list item shoud be inserted
let unorderdlist = document.getElementById("UnorderList")


//adding the Income item to list
function AddIncomeElement(input,num){
    if (input && num) {
        const listItem = document.createElement('li');
       listItem.className = "incomeListItem";
       const itemDetail = document.createElement('span');
        const removeButton = document.createElement('button');
        removeButton.className = "btn btn-danger";
        removeButton.value = `${num}`
    
        itemDetail.textContent = `${input} : $ ${num}`
        removeButton.textContent = 'Remove';
    
        listItem.appendChild(itemDetail);
       
        listItem.appendChild(removeButton);
        unorderdlist.appendChild(listItem);
    
        removeButton.addEventListener('click', () => {
            let amo = parseInt(removeButton.value)
            totalOfIncome -= amo;
            totalIncome.innerHTML = `<h2>Income : $ ${totalOfIncome}.00</h2>`
            balance.innerHTML = `<h2>Balance : $ ${totalOfIncome-totalOfExpenses}.00</h2>`
          unorderdlist.removeChild(listItem);
        });
      }
}

// Adding the expense item to the list
function AddExpenseElement(input,num){
    if (input && num) {
        const listItem = document.createElement('li');
       listItem.className = "expenseListItem";
       const itemDetail = document.createElement('span');
        const removeButton = document.createElement('button');
        removeButton.className = "btn btn-danger";
        removeButton.value = `${num}`
        itemDetail.textContent = `${input} : $ ${num}`
        removeButton.textContent = 'Remove';
    
        listItem.appendChild(itemDetail);
       
        listItem.appendChild(removeButton);
        unorderdlist.appendChild(listItem);
    
        removeButton.addEventListener('click', () => {
            let amo = parseInt(removeButton.value)
            totalOfExpenses -= amo;
            totalExpense.innerHTML = `<h2>Expense : $ ${totalOfExpenses}.00</h2>`
            balance.innerHTML = `<h2>Balance : $ ${totalOfIncome-totalOfExpenses}.00</h2>`
          unorderdlist.removeChild(listItem);
        });
      }
}