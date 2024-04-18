class BankAccount {
    // constructor
    constructor(balance) {
        // protect the constructor from being instantiated
        if( this.constructor === BankAccount) {
            throw new TypeError("Cannot construct Abstract instances directly.");
        }

        //initialising balance property
        this.balance = balance;
    }

    // abstract methods for the deposit
    deposit(amount) {
        // throw an error if the abstract method is called directly from child
        throw new TypeError("Cannot construct Abstract instance directly");
    }

    // abstract method for the withdrawal
    withdraw(amount) {
        // throw an error if the abstract method is called directly from child
        throw new TypeError("Cannot construct Abstract instance directly");
    }
}

// subclass (Child)
class SavingsAccount extends BankAccount {

    // constructor 
    constructor(balance, interestRate) {
        // call the parent class constructor
        super(balance);
        // initialise the interest rate property
        this.interestRate = interestRate;
    }
    // implementing the deposit method for SavingsAccount
    deposit(amount) {
        // calculate interest and update balance
        this.balance += amount + (amount * this.interestRate) / 100;
    }

    // implementing withdrawal method for SavingsAccount
    withdraw(amount) {
        // check if there are sufficient funds for withdrawal
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficeint funds');
        }
    }
}

// subclass (Child)
class BasicAccount extends BankAccount {

    // constructor with balance
    constructor(balance, overdraftLimit) {
        // call the parent class constructor
        super(balance);
        // initialise the overdraft property
        this.overdraftLimit = overdraftLimit;
    }
        // implementing the deposit method for CheckingAccount
        deposit(amount) {
            // update the balance with the deposited amount
            this.balance += amount;
    }
    // implementing the withdraw method for CheckingAccount
    withdraw(amount) {
        // check if there are sufficient funds for withdrawal including the overdraft
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
        } else {
            console.log('Insufficeint funds');
        }
    }
}

// create a SavingsAccount instance (object)
console.log("Savings Account Transactions:");
const savingsAccount = new SavingsAccount(1000, 3);
console.log("Savings Account Balance: ", savingsAccount.balance);
// Deposit funds into the savings account
savingsAccount.deposit(500);
console.log("Savings Account Balance after deposit: ", savingsAccount.balance);

// withdraw funds from the savings account
savingsAccount.withdraw(200);
console.log("Savings Account Balance after withdrawal: ", savingsAccount.balance);

console.log("Basic Account Transactions:");

const basicAccount = new BasicAccount(1000, 100);
console.log("Basic Account Balance: ", basicAccount.balance);

// Deposit funds into the basic account
basicAccount.deposit(500);
console.log("Basic Account Balance after deposit: ", basicAccount.balance);

// withdraw funds from the basic account
basicAccount.withdraw(200);
console.log("Basic Account Balance after withdrawal: ", basicAccount.balance);

const bankAccount = new BankAccount(1000);