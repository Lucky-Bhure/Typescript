// /* String: */
// Any value under single or double quotations are treated as string.
// Todo 👉 String Initialization:
// Declare a variable message of type string and assign it the value "Hello Typescript!".
let sentence1 = "Hello Typescript!";
let sentence2 = 'Hello Typescript!';
console.log("Sentence 1: ", sentence1);
console.log("Sentence 2: ", sentence2);
// Todo 👉 Concatenation:
// Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.
let name = "Lucky";
let surname = "Bhure";
let fullName = name + " " + surname;
console.log("Full Name: ", fullName);
// Todo 👉 String Length:
// Declare a variable sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable called sentenceLength.
let sentence3 = "This is a Type Annotation Practice Questions";
let sentence3Length = sentence3.length;
console.log("Sentence3 Length: ", sentence3Length);
// Todo 👉 Uppercase and Lowercase:
// Declare a variable text of type string and assign it a sentence of your choice. Convert the entire sentence to uppercase and store the result in a variable called uppercaseText. Then convert the entire sentence to lowercase and store the result in a variable cal led lowercaseText.
let text = "Lucky";
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();
console.log("UpperCaseText: ", upperCaseText);
console.log("LowerCaseText: ", lowerCaseText);
// Todo 👉  Substring: 
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.
let longText = "logn sentence";
let shortText = longText.slice(0, 10);
console.log("ShortText: ", shortText);
// Todo 👉  String Comparison: 
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1 = "sentence1";
let str2 = "sentence2";
let areEqual;
if (str1 === str2) {
    areEqual = true;
}
else {
    areEqual = false;
}
console.log("AreEqual: ", areEqual);
// Todo 👉 String Template: 
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
let product = "Milk";
let price = 20;
let string = `The product ${product} is priced at ${price} dollars.`;
console.log(string);
// /* Boolean: */
// In TypeScript, the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language.
// Todo 👉 Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num) {
    if (num % 2 == 1) {
        return false;
    }
    return true;
}
let evenOdd = isEven(4);
console.log(evenOdd ? "Number is Even" : "Number is Odd");
// Todo 👉 write a TypeScript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
function isDivisibleBy4And8(num) {
    if ((num % 4 == 0) && (num % 8 == 0))
        return true;
    return false;
}
let divisibleBy4And8 = isDivisibleBy4And8(81);
console.log(divisibleBy4And8 ? "Number is divisible by 4 and 8" : "Number is not divisible by 4 and 8");
// /* BigInt: */
// It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular number type.
// Biglnt literals are written by appending the n suffix to an integer literal.
// In JS we can 't read the whole numbers beyond 2 raise to power 53
let bigNumber = 9007199254740991n;
console.log(bigNumber);
let anotherBigNumber = BigInt("90071992547409915");
// let sum = bigNumber + anotherBigNumber;
let sumBigInt = bigNumber + anotherBigNumber;
console.log("BigInt Sum: ", sumBigInt);
// let difference = bigNumber - anotherBigNumber;
let differenceBigInt = bigNumber - anotherBigNumber;
console.log("BigInt Difference: ", differenceBigInt);
// let product = bigNumber * anotherBigNumber;
let productBigInt = bigNumber * anotherBigNumber;
console.log("BigInt Product: ", productBigInt);
// let division = bigNumber / anotherBigNumber;
let divisionBigInt = bigNumber * anotherBigNumber;
console.log("BigInt Product: ", divisionBigInt);
// /* any: */
// The any type is the most flexible type in TypeScript. It essentially /* turns off all type checking for the variables or expressions it is applied to */.
/* Use Cases */
// Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.
// Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise type
let valueAny = 5;
valueAny = "lucky";
valueAny = true;
// /* unknown */
// The unknown type is a safer alternative to any because it still /* enforces type checking and type safety */.
// Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.
let valueUnknown = 5;
valueUnknown = "lucky";
valueUnknown = true;
if (typeof valueUnknown === "number") {
    console.log("Value of Unknown: ", valueUnknown + 2);
}
else if (typeof valueUnknown === "string") {
    console.log("Value of Unknown: ", valueUnknown + " Unknown");
}
else if (typeof valueUnknown === "boolean") {
    valueUnknown = false;
    console.log("Value of Unknown: ", valueUnknown);
}
export {};
