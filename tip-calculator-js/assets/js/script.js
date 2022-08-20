const calculate = document.getElementById('calculate');

calc = () => {
    const amount = document.querySelector('.amount').value;
    let person = document.querySelector('.person').value;
    let select = document.getElementById('quality-select').value;
    const tipEachPer = document.querySelector('.tip-ep');
    const totalBillEachPer = document.querySelector('.total-bill-ep');
    const totalTipAmount = document.querySelector('.tip-amount-total');
    const totalAmount = document.querySelector('.total-bill-tip');
    const result1 = document.querySelector('.result-1');
    const result2 = document.querySelector('.result-2');
    const line = document.querySelector('.result-container .line');

    if(amount === "0" || select === "0" || amount === "" || person === "" || select === "") {
        alert("Please Enter Values in All Fields")
    }

    // When person value less equal to 1, it will return 1
    if(person <= "1") {
        person = "1";
    }

    // Calculate Each Person Tip Amount
    let perTip = (amount * select) / person;
    perTip = Math.round(perTip * 100) / 100;
    perTip = perTip.toFixed(2);

    // Get Total Tip amount from bill amount
    let totalTip = (Number(perTip) * Number(person)).toFixed(2);

    // Calculate Each Person need to Pay Amount
    let tipEachPerson = ((Number(amount) + Number(totalTip)) / person).toFixed(2);

    //Calculate Total (Bill + Tip)
    let totalBillTip = (Number(amount) + Number(totalTip)).toFixed(2);

    tipEachPer.innerHTML = "$"+perTip;
    totalBillEachPer.innerHTML = "$"+tipEachPerson;
    totalTipAmount.innerHTML = "$"+totalTip;
    totalAmount.innerHTML = "$"+totalBillTip;

    if(person === "1") {
        result1.style.display = "none";
        result2.style.display = "none";
        line.style.display = "none";
    }
};

calculate.addEventListener('click', ()=> {
    calc();
});