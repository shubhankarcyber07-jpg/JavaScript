"use strict"; // treat all code as newer version of JavaScript

// alert(3 + 3) // we are using nodejs, not browser, so alert will not work

console.log(3+3);
console.log(10-3);

let age = 25; // number
console.log(typeof age); // number

let firstName = "Shubhankar"; // string
console.log(typeof firstName); // string

let isStudent = true; // boolean
console.log(typeof isStudent); // boolean

let lastName = null; // null 
console.log(typeof lastName); //object

let middleName; // undefined
console.log(typeof middleName); // undefined

let num = 1234567890123456789012345678901234567890n; // bigint
console.log(typeof num); // bigint

// number => 2 to power of 53 - 1
// bigint => 2 to power of 63 - 1
// string => sequence of characters "", '',``
// boolean => true or false
// null => empty value
// undefined => value is not assigned



// primitives are immutable, they cannot be changed, but we can reassign them to a new value.

/* 7 types of data types in JavaScript
     1. Number
     2. String
     3. Boolean
     4. Null
     5. Undefined
     6. BigInt
     7. Symbol
*/

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId);

// Reference or Non-primitive data types in JavaScript
/*
    1. Object
    2. Array
    3. Function
*/

// Array is a collection of values, which can be of any data type. It is an ordered list of values, which can be accessed by their index. The index starts from 0.

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits); // Apple,Banana,Mango,Orange
console.log(fruits.length); // 4


// Object is a collection of key-value pairs, which can be of any data type. It is an unordered list of values, which can be accessed by their key.

let person = {
    name: "Shubhankar",
    age: 25,
    isStudent: true
};

console.log(person); // { name: 'Shubhankar', age: 25, isStudent: true } 

// Function is a block of code that can be executed when called. It can take parameters and return a value.

function greet(name) {
    console.log("Wellcome to JavaScript world, " + name);
    return `Hello, ${name}!`;
}

console.log(greet("Shubhankar")); // Hello, Shubhankar!

// javascript is a dynamically typed language, which means we don't have to specify the data type of a variable when we declare it. The data type is determined automatically based on the value assigned to the variable.