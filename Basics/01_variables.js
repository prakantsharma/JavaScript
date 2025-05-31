const accountId=102;
let accountEmail="prakantsharma@google.com";
// var had scope problems that's why we use Let and never use var
var accountPassword="102457";

let accountState; //undefined


accountCity="Jaipur";
console.log("Account id is:",accountId);

//accountId=103;// not allowed TypeError: Assignment to constant variable.
console.log(accountId);
accountEmail="prakash@google.com";
accountPassword="1024#1024";
accountCity="Noida";

// prints all the data in tabular form;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


