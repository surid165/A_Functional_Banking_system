

document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');

    if(isNaN(newDepositAmount)){
        alert('Enter a Valid Number');
        return;
    }

    // get prev total amount

    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    // console.log(newDepositAmount,previousDepositTotal);
    
    // calculate new deposit total
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    //set deposit total

    setTextElementValueById('deposit-total',newDepositTotal);

    // get prev balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal); 
    
})