// /* TypeOf Guards OR Type Narrowing: */

// A typeof guard in TypeScript lets you narrow down the type of a variable based on its runtime value. In TypeScript, type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances. This is particularly useful with union types and generic types.

let hobbies = (hobby: string | string[]) => {
    // return hobby.map(()=> {});
    if(typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((hob)=> { console.log(hob)});
    } else {
        console.log(hobby);
    }
}  

hobbies(["a","b","c"]);
hobbies("d");
