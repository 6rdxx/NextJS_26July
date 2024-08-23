const [amount, button, shfaq] = [
    document.querySelector("#amount"),
    document.querySelector("#button"),
    document.querySelector("#shfaq")
];

const person = {
    emri: 'Alba',
    balance: 10000
};


const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount.value);
    withdraw(person, withdrawAmount);
}

const withdraw = (person, amount) => {
    if (amount > person.balance) {
        shfaq.innerHTML = "The withdrawal cannot be processed due to insufficient funds.";
    } else {
        person.balance -= amount;
        shfaq.innerHTML = `Withdraw successful. Balance after withdrawal: ${person.balance.toFixed(2)}`;
        amount.value = '';

        if (person.balance === 0) {
            shfaq.innerHTML += " Your balance is now 0.";
        }
    }
};

button.addEventListener('click', handleWithdraw);
