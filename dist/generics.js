"use strict";
// /* Generics: */
// Generics allow to create reusable components or functions that can work with multiple data types.
// Normal way to getting multiple types input with same function
function inputAndReturn(value) {
    return value;
}
const numberValue = inputAndReturn(22);
const stringValue = inputAndReturn("Lucky Bhure");
const booleanValue = inputAndReturn(true);
console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);
// Generics way of getting multiple types input with same function
function genericsReturn(value) {
    return value;
}
const genericNumberValue = genericsReturn(22);
const genericStringValue = genericsReturn("Lucky Bhure");
const genricBooleanValue = genericsReturn(true);
console.log(genericNumberValue);
console.log(genericStringValue);
console.log(genricBooleanValue);
function multiGenerics(a, b) {
    return a;
}
