const score = 400;
console.log(score);


const balance = new Number(100);
console.log(balance);

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00


const otherBalance = 99100.1234;
// console.log(otherBalance.toPrecision(3)); // 99100
// console.log(otherBalance.toPrecision(4)); // 99100.1234


//++++++++++++++++ Math ++++++++++++++++++++

Math.round(4.6); // 5
Math.floor(4.6); // 4
Math.ceil(4.6); // 5    
Math.trunc(4.6); // 4
Math.abs(-4); // 4

console.log(Math.random());
// console.log(Math.floor((Math.random()*10) + 1));

// how generate random numder between 1 to 6
console.log(Math.floor((Math.random()*6) + 1)); // 1 to 6


// how generate random numder between min to max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(75, 99)); // 75 to 99

