// Array in JavaScript is a data structure that allows you to store multiple values in a single variable. Arrays are ordered collections of elements, and each element can be of any data type, including numbers, strings, objects, or even other arrays. Also array can be created using square brackets [] and elements are separated by commas. and size of array is dynamic and can be changed at runtime. in other languages like C, C++ and Java, array size is fixed at compile time.

const myArr = [1, 2, 3, 4, 5]; 
console.log(myArr);

const myArr2 = ["Shubhankar", "Hitesh", "Rohit", "Saurabh"];
console.log(myArr2);

const myArr3 = new Array(1, 2, 3, 4, 5); // using new keyword
console.log(myArr3);

myArr.push(6); // add element at the end of array
console.log(myArr);


myArr.pop(); // remove element from the end of array
console.log(myArr);

myArr.unshift(0); // add element at the beginning of array
console.log(myArr);

myArr.shift(); // remove element from the beginning of array
console.log(myArr);

const newArr = myArr.concat(myArr2); // merge two arrays
console.log(newArr);

const newArr2 = myArr.join(", ");
console.log(newArr2);

// slice, splice difference is slice does not change the original array but splice changes the original array. slice returns a new array and splice returns the removed elements.
const myArr4 = [1, 2, 3, 4, 5];
const newArr3 = myArr4.slice(1, 4);
console.log(newArr3);
console.log(myArr4); // original array is unchanged

// splice removes elements from the original array and returns the removed elements
const myArr5 = [1, 2, 3, 4, 5];
const newArr4 = myArr5.splice(1, 3);
console.log(newArr4);
console.log(myArr5); // original array is changed

