// /* Getter and Setter: */

// In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.
// TODO The get method doesn't take any parameters, and the set method takes only one

class Persons {
    private _age: number | undefined;
    constructor (
        public name: string,
        protected hobbies: string[]
    ) {}

    introduce (): string {
        return `Hi, I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(", ")}.`;
    }

    public set age(age: number) {
        if(age > 120 || age < 0) {
            throw new Error("Age is not valid");
        }
        this._age = age;
    }

    public get age() {
        if(this._age === undefined) {
            throw new Error("Age is undefined");
        }
        return this._age;
    }
}

const person1 = new Persons("Lucky Bhure", ["Coding", "Sketching"]);

person1.age = 12;

console.log(person1.introduce());

// Questions on Getter and Setter: 

// 1. Back Account Balance
// Create a TypeScript class BankAccount with a private property _balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non-negative. Otherwise, log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated balance.
// Try setting a negative balance using the setter. What output do you expect?
class BankAccount {
    private _balance : number = 0; 

    public get balance() {
        return this._balance;
    }

    public set balance(amount: number) {
        if(amount < 0) {
            throw new Error("Ammount enter is invalid");
        }
        this._balance = amount;
    }
}

const bankAccount = new BankAccount();
bankAccount.balance = 1000;
console.log(bankAccount.balance);

// bankAccount.balance = -120;
// console.log(bankAccount.balance);


// 2. Temperature Converter
// Define a TypeScript class Temperature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that set the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F - 32) * 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius. What Celsius value do you expect?

class Temperature {
    private _celsius: number = 0;

    public get celsius() {
        return this._celsius;
    }

    public set celsius(temp:number){
        this._celsius = temp;
    }

    public get fahrenheit() {
        return (this._celsius * 9)/5 + 32;
    }

    public set fahrenheit(temp: number) {
        this._celsius = (temp - 32) * (5/9)
    }
}

const temperature = new Temperature();
temperature.celsius = 25;
console.log("Fahrenheit: ",temperature.fahrenheit);

temperature.fahrenheit = 98.6;
console.log("Celsius: ",temperature.celsius);
