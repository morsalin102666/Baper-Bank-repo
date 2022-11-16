// ====================== Deposit or Withdrow input ===============================
function updateBalance(inputFill){
    const updateTotal = document.getElementById(inputFill);
    const updateTotalTaxt = updateTotal.value;
    const value = parseFloat(updateTotalTaxt);
    updateTotal.value = '';
    return value;
}

// ======================= Deposit or Withdrow balance ================

function updateTotal(total, amount){
    const mainBalance = document.getElementById(total);
    const mainBalanceText = mainBalance.innerText;
    const mainValue = parseFloat(mainBalanceText);
    const totalAmound = mainValue + amount;
    mainBalance.innerText = totalAmound;
    return totalAmound;
}

// ================= mainb balance add o minus

function mainBalance(amount, isAdding){
    const totalBalance = document.getElementById('deposi-main');
    const totalBalanceText = totalBalance.innerText;
    const totalValue = parseFloat(totalBalanceText);
    let newBalance;
    if (isAdding === true){
        newBalance = totalValue + amount;
    }
    else{
        newBalance = totalValue - amount;
    }
    totalBalance.innerText = newBalance; 
}


// ======================= Deposit button ===============================

document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = updateBalance('deposit-fill');
    updateTotal('deposit-main', amount)
    mainBalance(amount, true)
})

// ====================== Witdhrow button ===============================
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = updateBalance('withdraw-fill');
    updateTotal('withdraw-main', amount)
    mainBalance(amount, false)
})