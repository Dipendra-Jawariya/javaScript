const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// const accoundId = 1445;
// let accountEmail = "dipendrajawariya232gmail.com";
// var accountPswd = "123456";
// accountCity = "Jaipur";


// let accountState; // shows undefined;

// // accoundId = 2;
// /*
// prefer not to use var because of issue in block scope and functional scope

// */
// accountEmail = "d@.com"
// accountPswd = "2334678"
// accountCity = "Bengaluru"
// console.log(accoundId);
// console.table([accoundId,accountEmail,accountPswd,accountCity,accountState]);