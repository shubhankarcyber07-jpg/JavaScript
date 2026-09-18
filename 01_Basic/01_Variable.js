const accountId = 12345;
let accountEmail = "shubhankar@example.com";
var accountPassword = "password123";
accountCity = "New York";

let accountState;

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
Prefer not to use var
beacause it is function scoped and can lead to unexpected behavior. Use const for variables that won't change and let for variables that will change.
*/