const name = "Shubhankar"; 
const repoCount = 10;

// Bad Practice for String concatenation 
console.log("Hello " + name + ", you have " + repoCount + " repositories."); // Hello Shubhankar, you have 10 repositories.

// Good Practice for String concatenation using template literals
console.log(`Hello ${name}, you have ${repoCount} repositories.`); // Hello Shubhankar, you have 10 repositories.

const gamename = "Pacman";
const gameScore = 5000;

// console.log(gamename.);

const url = "https://hitesh.com/htesh%20javascript";

console.log(url.replace("%20", "-"));