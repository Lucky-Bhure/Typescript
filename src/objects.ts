// /* Objects: */

// In TypeScript, objects are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in ES6) that maps to a value.

// ? Let 's consider a real-life example of representing a person 's information using TypeScript objects
// name, age, isStudent, address{ city, country}

// Object Declaration
const person: {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    }
} = {
    name: "Lucky Bhure",
    age: 22,
    address: {
        city: "Mouda",
        country: "India"
    }
};

console.log(person.address.city);


// /* Type Alias: */

// In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types

// To define a type alias, you use the type keyword followed by the alias name and the type definition:

type Product = {
    name: string;
    price: number;
    stock: number;
    location?: string; // Optional Property
}

const product:Product = {
    name: "Laptop",
    price: 60000,
    stock: 20
}
