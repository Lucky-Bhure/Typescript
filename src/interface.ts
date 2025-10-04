//  /* Interface: */

// * In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.

interface Profile {
    name: string;
    age: number;
    address: string;
}

const myProfile: Profile = {
    name: 'Lucky Bhure',
    age: 22,
    address: "Nagpur, Maharashtra"
}

console.log(myProfile);