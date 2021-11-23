let buttonsDiv = document.getElementsByClassName("tip__btns");
let allButtons = buttonsDiv.getElementsByTagName('button');
let noOfButtons = allButtons.length();
let i;

function tipCalculate(e) {
    let billAmount = document.getElementById("bill__amount").value;
    let tipPercent = e.target.value;
    let noOfPeople = document.getElementById("people-no").value;
    let tipAmountPerPerson = billAmount / 100 * tipPercent / noOfPeople;
    let totalAmountPerPerson = (billAmount + (billAmount / 100 * tipPercent)) / noOfPeople;
    document.getElementByClassName("tip-amount-display").innerHTML = tipAmountPerPerson;
    document.getElementByClassName("total-amount-display").innerHTML = totalAmountPerPerson;  
}

// append event listeners to each button
for(i = 0; i < noOfButtons; i++) {
    allButtons[i].addEventListener('click', tipCalculate, true);
}





