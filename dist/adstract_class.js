// /* Abstract Class: */
// Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.
// abstract class cannot be instantiated
// abstract classes focus on class inheritance and sharing common functionality,
// whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.
// Example: Shape Hierarchy
// Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class Shape to define common properties and methods that all shapes share.
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`Area of ${this.color} Circle is`, this.calculateArea());
    };
}
const circle1 = new Circle("Red", 3);
circle1.displayArea();
export {};
