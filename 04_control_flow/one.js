// if

// <, >, <=, >=, ==, !=, ===, !==

if (2 == "2") {
    // console.log("executed");

}

// const temperature = 42
// if (temperature < 50) {
//     console.log("temperature is less than 50");

// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power ${power}`);
    
// }

// const balance = 1000

// // if (balance > 500) console.log("greater than 100");

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail= true
if (userLoggedIn && debitCard) {
    console.log("allow to buy books");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user Logged In");
    
}