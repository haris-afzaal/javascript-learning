function createBankAccount() {
    let balance = 1000;

    function deposit(amount) {
        balance = balance + amount;
        console.log("Balance:", balance);
    }

    function withdraw(amount) {
        balance = balance - amount;
        console.log("Balance:", balance);
    }

    return {
        deposit: deposit,
        withdraw: withdraw
    };
}

let myAccount = createBankAccount();

myAccount.deposit(500);
myAccount.deposit(200);
myAccount.withdraw(300);
myAccount.withdraw(100);