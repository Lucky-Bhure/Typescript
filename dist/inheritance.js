// /* Inheritance: */
// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents.
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Students extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        // In TypeScript, the super keyword is used in the context of class inheritance. It allows a subclass (also known as a derived class) to call methods or access properties of its superclass (also known as a base class). This is particularly useful when you want to extend the behaviour of a parent class while still levaraging its existing functionality.
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} I am in ${this.grade} grade.`;
    }
}
const students1 = new Students("Lucky Bhure", 19, ["Coding", "Gaming"], 10);
const persons2 = new Persons("Sahil Bhure", 22, ["Sketching", "Reading"]);
console.log(students1.introduce());
export {};
