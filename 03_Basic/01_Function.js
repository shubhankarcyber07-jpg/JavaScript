function addTwoNumbers(a, b) {
    console.log(a+b);
    return a + b;
}

addTwoNumbers(5, 10); // 15

function loginUserMessage(username = "defaultUser") {
    return `Welcome ${username}, you are logged in.`;
}

console.log(loginUserMessage("Shubhankar")); // Welcome Shubhankar, you are logged in.


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(2,3,4));