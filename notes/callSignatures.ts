// /* Call Signature: */

// The function call signature refers to the declaration or definition of a function, which includes the function 's name, parameters, and return type. It defines the structure and type information of a function without including the function 's implementation or body.

// lets add one function inside the object. It 's more like creating a method in object

// Very Important => call signatures are typically used inside object type notations to describe the shape of functions within object types.

type Student = {
    name: string;
    age: number;
    greet: (country: string) => string;
}

const student1: Student = {
    name: "Lucky Bhure",
    age: 22,
    greet: (country): string =>  `Hello, I am ${student1.name}. I am ${student1.age} years old. I am from ${country}. Take care of me. Thank You!` 
}

console.log(student1.greet("India"));

