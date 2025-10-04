"use strict";
// /* Objects: */
Object.defineProperty(exports, "__esModule", { value: true });
// In TypeScript, objects are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in ES6) that maps to a value.
// ? Let 's consider a real-life example of representing a person 's information using TypeScript objects
// name, age, isStudent, address{ city, country}
// Object Declaration
const person = {
    name: "Lucky Bhure",
    age: 22,
    address: {
        city: "Mouda",
        country: "India"
    }
};
console.log(person.address.city);
const product = {
    name: "Laptop",
    price: 60000,
    stock: 20
};
