"use strict";
// /* enum: */
// Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.
// In TypeScript, when enum constants are not automatically assigned incremental numeric values the first enum constant is 0, and subsequent enum explicitly assigned numeric values, they are starting from 0. The default numeric value for constants receive values incremented by 1.
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const user1 = {
    name: "Lucky Bhure",
    email: "luckybhure19@gmail.com",
    password: "123",
    role: Role.admin
};
const user2 = {
    name: "Sahil Bhure",
    email: "sahilbhure19@gmail.com",
    password: "adasd",
    role: Role.user
};
const greet = (user) => {
    return user.role === Role.admin ? `${user.name} is a admin` : `${user.name} is a user`;
};
console.log(greet(user1));
console.log(greet(user2));
