let score = 33;

console.log(typeof score); // number
console.log(typeof(score)); // number

let valuenNumber = Number(score); // convert number to number
console.log(typeof valuenNumber); // number
console.log(valuenNumber); // 33

let valueString = String(score); // convert number to string
console.log(typeof valueString); // string
console.log(valueString); // "33"

let valueBoolean = Boolean(score); // convert number to boolean
console.log(typeof valueBoolean);   // boolean
console.log(valueBoolean); // true      


             /*     OPERATION  */

console.log(3 + 3); // 6
console.log(3 - 3); // 0
console.log(3 * 3); // 9
console.log(3 / 3); // 1
console.log(3 % 3); // 0
console.log(3 ** 3); // 27

let str1 = "Hello";
let str2 = "World";

let str3 = str1 + " " + str2; // concatenation
console.log(str3); // Hello World

console.log("1" + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

console.log(1 + 2 + 3 + "4" + 5 + 6); // "6456"

console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // right to left assignment
console.log(num1, num2, num3); // 4 4 4

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
// ++gameCounter;
console.log(++gameCounter); // 102
console.log(gameCounter++); // 102
console.log(gameCounter); // 103
