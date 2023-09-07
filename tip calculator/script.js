const amount = document.getElementById("amount");
const guest = document.getElementById("guest");
const quarity = document.getElementById("quarity");
const tipAmount = document.getElementById("tip-amount");



calculate = ()=>{
    const tip = ((amount.value * quarity.value)/guest.value).toFixed(2);
    amount.value = '';
    guest.value = '';
    quarity.value = '';

    if (tip === 'NaN') {
        tipAmount.innerHTML = '0$ Tip';
        showTipAmount();
    }else{
        tipAmount.innerHTML = 'Tip $' + tip ;
        showTipAmount();
    }
}

showTipAmount = ()=>{
    var x = tipAmount;
    x.classList.add('show');
    // setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
}