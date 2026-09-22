// Arrow function 

const chai = () => {
    let username = "Shubhankar";
    console.log(this);
}

chai();


// const addTwo = (a, b) => {
//     return a+b;
// }

// const addTwo = (a, b) =>  a+b;

const addTwo = (a, b) =>  (a+b);



console.log(addTwo(4,5)); // 9

