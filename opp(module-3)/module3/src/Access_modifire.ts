{
    // Access modifiers
class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number; // Fixed spelling from _blance to _balance

    constructor(id: number, name: string, balance: number) { // Fixed spelling from _blance to balance
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    addDeposit(amount: number) { // Fixed spelling from addDeposite to addDeposit
        this._balance += amount; // Simplified addition syntax
    }

    getBalance() { // Fixed spelling from getBalnce to getBalance
        return this._balance;
    }
}

// Fixed the syntax for extending classes and corrected access
class StudentAccount extends BankAccount {
    test() {
        return this._balance; // Changed __blance to _balance
    }
}

// Create an instance of BankAccount
const goribManusherAccount = new BankAccount(111, "ssjoy", 20);
// goribManusherAccount._balance = 0; // This line is commented out as _balance is protected
goribManusherAccount.addDeposit(0); // Changed to addDeposit
console.log(goribManusherAccount.getBalance()); // Changed from my_blance to getBalance method

}