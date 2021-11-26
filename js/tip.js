let allButtons = document.getElementsByClassName('btn');
let noOfButtons = allButtons.length;
let i;

function tipCalculate(e) {

    let billAmount = parseFloat(document.getElementById('bill__amount').value || 0);
    let tipPercent = e.target.value;
    let customTipPercent = document.getElementById('tip__custom') || 0;
    let noOfPeople = document.getElementById('people-no').value || 1;
    if (typeof tipPercent == 'undefined') {
        let tipAmountPerPerson = billAmount / 100 * customTipPercent / noOfPeople;
        let totalAmountPerPerson = (billAmount + (billAmount / 100 * customTipPercent)) / noOfPeople;
        document.getElementsByClassName('tip-amount-display')[0].innerHTML = '$'+parseFloat(tipAmountPerPerson).toFixed(2);
        document.getElementsByClassName('total-amount-display')[0].innerHTML = '$'+parseFloat(totalAmountPerPerson).toFixed(2);  
    } else { 
        let tipAmountPerPerson = billAmount / 100 * tipPercent / noOfPeople;       
        let totalAmountPerPerson = (billAmount + (billAmount / 100 * tipPercent)) / noOfPeople;
        document.getElementsByClassName('tip-amount-display')[0].innerHTML = '$'+parseFloat(tipAmountPerPerson).toFixed(2);
        document.getElementsByClassName('total-amount-display')[0].innerHTML = '$'+parseFloat(totalAmountPerPerson).toFixed(2);  
    } 
   
}

// append event listeners to each button and also custom input
for(i = 0; i < noOfButtons; i++) {
    allButtons[i].addEventListener('click', tipCalculate);
}

document.getElementById('tip__custom').addEventListener('change', tipCalculate, true);

var inp1 = document.getElementById("people-no");
var inp2 = document.getElementById("bill__amount");
var inp3 = document.getElementById("tip__custom");

inp1.onkeyup = function (e) {
    if (inp1.value == 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #b57f75";
    } else if (inp1.value != 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #26c0ab";
    }
};

inp2.onkeyup = function (e) {
    if (inp2.value == 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #b57f75";
    } else if (inp2.value != 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #26c0ab";
    }
};

inp3.onkeyup = function (e) {
    if (inp3.value == 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #b57f75";
    } else if (inp3.value != 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #26c0ab";
    }
};