"use strict";
// /* Type Inference: */
// Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign types to variables, expressions, and function return values based on their usage and context in the code.
let name = "Lucky";
// todo 👉What are some best practices for using type inference in TypeScript?
// 1. Use type inference for simple cases where the assigned value clearly indicates the intended type.
// 2. When in doubt, provide explicit type annotations to make your intentions clear.
// 3. Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
// 4. Regularly review and refactor your code to ensure the inferred types align with your intentions.
let firstName = "vinod"; // The compiler infers the type string for the variable firstName
let age = 25; // The compiler infers the type number for the variable age
let isValid = true; // The compiler infers the type boolean for the variable isValid.
// Declare a variable message and initialize it with the, "Hello, TypeScript!". Infer the type of message using type inference.
let strInfer = "Hello, TypeScript!"; // The compiler infers the type string for the variable strInfer
// Write a function calculateArea that takes the length and width parameters of type number and returns their product. Infer the return type of the function using type inference.
const calculateArea = (length, width) => {
    return length * width;
}; // The compiler infers the type number for the function calculateArea
