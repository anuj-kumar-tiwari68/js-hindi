const user = {
    username: "Anuj",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()
// console.log(this);  // because of node environment it is showing {} but when run in console of browser it shows windows object

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,7));

// ********* Implicit return ********

// const addTwo = (num1,num2) => num1 + num2


// console.log(addTwo(3,7));

// const addTwo = (num1,num2) => (num1 + num2)


// console.log(addTwo(3,7));

const addTwo = (num1,num2) => ({username:"anuj"}) // object must be in () brackets

console.log(addTwo());



