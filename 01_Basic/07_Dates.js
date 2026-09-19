let myDate = new Date();
console.log(myDate); // Current date and time

console.log(myDate.toString()); // Current date and time in string format
console.log(myDate.toDateString()); // Current date in string format
console.log(myDate.toLocaleDateString()); // Current date in locale-specific string format

 console.log(myDate.toLocaleString());


 let myCreateDate = new Date(2023, 5, 15); // Year, Month (0-indexed), Day
console.log(myCreateDate.toString()); // Thu Jun 15 2023 00:00:00 GMT+0000 (Coordinated Universal Time)


let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); // Timestamp of the created date in milliseconds

console.log(Math.floor(Date.now()/1000) + "");


let newDate = new Date();
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1); // Month is 0-indexed, so we add 1
console.log(newDate.getDate());
