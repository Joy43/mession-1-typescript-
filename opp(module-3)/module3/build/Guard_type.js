"use strict";
// Type Guard using typeof
{
    const add = (param1, param2) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            // Both are numbers, so we return the sum as a string
            return (param1 + param2).toString();
        }
        else {
            // At least one is a string, so we concatenate as strings
            return param1.toString() + param2.toString();
        }
    };
    // Examples
    console.log(add(5, 10)); // Output: "15" (string)
    console.log(add("Hello", "World")); // Output: "HelloWorld" (string)
    console.log(add("Hello", 5)); // Output: "Hello5" (string)
    console.log(add(5, "World")); // Output: "5World" (string)
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`My is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    const normalUser = {
        name: 'ss joy'
    };
    const adminUser = {
        name: 'md hasan',
        role: "admin"
    };
    getUser(normalUser);
    getUser(adminUser);
}
