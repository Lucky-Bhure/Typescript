// Here are some practice questions related to string types In Typescript.

// Todo 👉 String Initialization:
// Declare a variable message of type string and assign it the value "Hello Typescript!".
let sentence1: string = "Hello Typescript!";
let sentence2: string = 'Hello Typescript!';
console.log("Sentence 1: ",sentence1);
console.log("Sentence 2: ",sentence2);

// Todo 👉 Concatenation:
// Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.
let name: string = "Lucky";
let surname: string = "Bhure";
let fullName: string = name + " " + surname;

console.log("Full Name: ", fullName);

// Todo 👉 String Length:
// Declare a variable sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable called sentenceLength.
let sentence3: string = "This is a Type Annotation Practice Questions";
let sentence3Length: number = sentence3.length;

console.log("Sentence3 Length: ", sentence3Length);

// Todo 👉 Uppercase and Lowercase:
// Declare a variable text of type string and assign it a sentence of your choice. Convert the entire sentence to uppercase and store the result in a variable called uppercaseText. Then convert the entire sentence to lowercase and store the result in a variable cal led lowercaseText.
let text: string = "Lucky";
let upperCaseText: string = text.toUpperCase();
let lowerCaseText: string = text.toLowerCase();
console.log("UpperCaseText: ", upperCaseText);
console.log("LowerCaseText: ", lowerCaseText);


// Todo 👉  Substring: 
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.
let longText: string = "logn sentence";
let shortText: string = longText.slice(0,10);
console.log("ShortText: ", shortText);

// Todo 👉  String Comparison: 
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1:string = "sentence1";
let str2:string = "sentence2";
let areEqual: boolean;

if(str1 === str2) {
    areEqual = true;
} else {
    areEqual = false;
}
console.log("AreEqual: ", areEqual);


// Todo 👉 String Template: 
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
let product: string = "Milk";
let price: number = 20;
let string:string = `The product ${product} is priced at ${price} dollars.`;
console.log(string);