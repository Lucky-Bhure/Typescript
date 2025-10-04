// /* Tuples: */

// In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.

// Real-life example of using tuples in TypeScript:

// Let's consider a scenario where you want to represent a person's basic information, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.

// Defining a tuple type for person information
type PersonInfo = readonly [string, number, boolean];

// Function to display person information
const displayPersonDetails = (person: PersonInfo): string => {

    const [name, age, hasDrivingLicense] = person;

    return `Name: ${name}, Age: ${age}, Driving License: ${hasDrivingLicense}`
}


// Example usage
const person1: PersonInfo = ["Lucky Bhure", 22, true];
const person2: PersonInfo = ["Sahil Bhure", 14, false];

console.log("First Person: ", displayPersonDetails(person1));
console.log("Second Person: ", displayPersonDetails(person2));

// /* Tuples in Typescript */
//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.
type ProductDetails = [string, number, number];

const displayProductDetails = (product: ProductDetails): string => {

    const [name, price, quantity] = product;

    return `Name: ${name}, Price: ${price}, Quantity: ${quantity}`
}

const product1: ProductDetails = ["Milk", 30, 3];

console.log("First Product: ",displayProductDetails(product1));


//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.