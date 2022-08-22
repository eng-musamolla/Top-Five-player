

// Calculation
document.getElementById("calculate").addEventListener("click", function () { 
    const inputValue = getElementValueById();
    
    const expenses = document.getElementById("playerExpenses");
    const expensesInt = parseInt(expenses.innerText);
    if(!isNaN(inputValue)) {
        expenses.innerText = inputValue * 5;
    }
});







// Calculation Total Expenses

document.getElementById("calculateTotal").addEventListener("click", function () { 
    const managerValue = manager();
    const coachValue = coach();
    
    const expenses = document.getElementById("playerExpenses");
    const expensesInt = parseInt(expenses.innerText);
    const total = document.getElementById("total");
    const totalfinal = (managerValue + coachValue + expensesInt);  

    if  (!isNaN(managerValue) && !isNaN(coachValue) && !isNaN(expensesInt)) {
        total.innerText = totalfinal;
    }    
});

