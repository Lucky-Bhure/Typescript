"use strict";
// /* Tuples: */
Object.defineProperty(exports, "__esModule", { value: true });
// Function to display person information
const displayPersonDetails = (person) => {
    const [name, age, hasDrivingLicense] = person;
    return `Name: ${name}, Age: ${age}, Driving License: ${hasDrivingLicense}`;
};
// Example usage
const person1 = ["Lucky Bhure", 22, true];
const person2 = ["Sahil Bhure", 14, false];
console.log("First Person: ", displayPersonDetails(person1));
console.log("Second Person: ", displayPersonDetails(person2));
const displayProductDetails = (product) => {
    const [name, price, quantity] = product;
    return `Name: ${name}, Price: ${price}, Quantity: ${quantity}`;
};
const product1 = ["Milk", 30, 3];
console.log("First Product: ", displayProductDetails(product1));
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
