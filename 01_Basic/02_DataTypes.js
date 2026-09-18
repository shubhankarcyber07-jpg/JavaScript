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