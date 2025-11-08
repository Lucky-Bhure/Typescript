// /* Class */

// A class in terms of OOP is a blueprint for creating objects
// A class is like a blueprint for creating similar things.
// In TypeScript, there is a convention to use PascalCase (also known as UpperCamelCase) for class names. This means that class names should start with also begin with a capital letter and subsequent word in the class name should also begin with a capital letter.

class Persons {
    name : string;
    age : number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        // The this keyword in a constructor inside a class refers to the instance of the object being created. It's used to access and assign values to the instance's properties.
    }
}

const persons1 = new Persons("Lucky Bhure", 19, ["Coding","Gaming"]);
const persons2 = new Persons("Sahil Bhure", 22, ["Sketching","Reading"]);

console.log("Details: ",persons1)