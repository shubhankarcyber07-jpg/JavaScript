// singleton object

// singleton object is an object that can only have one instance. It is used to create a single instance of an object and provide a global point of access to it.

const singleton = {
    name: "Shubhankar",
    age: 22,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// object literal is a way to create an object in JavaScript. It is a comma-separated list of name-value pairs wrapped in curly braces {}. The name is a string and the value can be any valid JavaScript expression, including another object or function.

const mySymbol = Symbol("Key1"); // unique and immutable value

const person = {
    name: "Shubhankar",
    "Full Name": "Shubhankar Kumar",
    [mySymbol]: "myKey1",
    age: 22,
    location: "India",
    email: "shubhankar@example.com",
    isStudent: true,
    isLoggedIn: false,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

//how to access object properties in JavaScript?

console.log(person.name); // Shubhankar
console.log(person["age"]); // 22 
console.log(person["email"]); // shubhankar@example.com

// console.log(person.Full Name);
console.log(person["Full Name"]); // Shubhankar Kumar

console.log(person[mySymbol]); // myKey1
console.log(typeof person[mySymbol]); // string

person.email = "shubhankar@gmail.com";
console.log(person.email); // shubhankar@gmail.com

// Object.freeze(person); // freeze the object so that it cannot be modified

person.age = "shubhankar@GPUTexture.com"; // this will not work because the object is frozen
console.log(person.email); // shubhankar@gmail.com
console.log(person);


person.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and my email is ${this.email}.`);
}

console.log(person.greeting()); // Hello, my name is Shubhankar and I am 22 years old and my email is shubhankar@gmail.com

console.log(person.greet()); // Hello, my name is Shubhankar and I am 22 years old.