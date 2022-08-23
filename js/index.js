

document.getElementById('playerButton').addEventListener('click', function (event) {
    const player = event.target.innerText;
    if (player === 'SELECT') { 
        
        document.getElementById(player).disabled = true;
        // const playerList = document.getElementById('orderdList');  
        // playerList.length = 0;
        // const option = document.createElement('option');
        // option.text = 'SELECT';
        // playerList.add(option);
    } else {
        const playerList = document.getElementById('orderdList');  
        playerList.length = 0;
        const option = document.createElement('option');
        option.text = 'SELECT';
        playerList.add(option);
        for (let i = 0; i < players.length; i++) {
            if (players[i].position === player) {
                const option = document.createElement('option');
                option.text = players[i].name;
                playerList.add(option);
            }
        }
    }
    
 });



// Calculation
document.getElementById("calculate").addEventListener("click", function () { 
    const player = document.getElementById("orderdList");
    const playerNumbers = player.childElementCount;
    const inputValue = getElementValueById("perPlayer", "Per Player");
    const expenses = document.getElementById("playerExpenses");
    const expensesInt = parseInt(expenses.innerText);
    if(!isNaN(inputValue)) {
        expenses.innerText = inputValue * playerNumbers;
    }
});


// Calculation Total Expenses

document.getElementById("calculateTotal").addEventListener("click", function () { 
    const managerValue = getElementValueById("manager", "Manager");
    const coachValue = getElementValueById("coach", "Coach");
    
    const expenses = document.getElementById("playerExpenses");
    const expensesInt = parseInt(expenses.innerText);
    const total = document.getElementById("total");
    const totalfinal = (managerValue + coachValue + expensesInt);  

    if  (!isNaN(managerValue) && !isNaN(coachValue) && !isNaN(expensesInt)) {
        total.innerText = totalfinal;
    }    
});

