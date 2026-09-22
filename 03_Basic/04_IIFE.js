// Immdiately invoked Function Expressions (IIFE)

(function chai(){
    console.log(`BD CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO by ${name}`);
})("Shubhankar")