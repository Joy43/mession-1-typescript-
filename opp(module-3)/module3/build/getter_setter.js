"use strict";
{
    {
        // Access modifiers
        class BankAccount {
            constructor(id, name, balance) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }
            addDeposit(amount) {
                this._balance += amount; // Simplified addition syntax
            }
            getBalance() {
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
}
