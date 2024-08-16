let amount = document.getElementById("amount");
let button = document.getElementById("button");
let shfaq = document.getElementById("shfaq");

let person = {
    emri: 'Alba',
    balance: 10000
};

button.addEventListener("click", handleWithdraw);

function handleWithdraw() {
    let withdrawAmount = parseFloat(amount.value);
    withdraw(person, withdrawAmount);
}

function withdraw(person, amount) {
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
}
