// functions

function sayMyName(){
    // console.log("Anuj");
    
}
sayMyName()

// function multiplyTwoNumbers(n1,n2){
//     console.log(n1*n2);
    
// }
// multiplyTwoNumbers(12,13)

// function multiplyTwoNumbers(n1,n2){
//     console.log(n1*n2);
    
// }
// const result = multiplyTwoNumbers(12,13)
// console.log("result : ",result);  // result :  undefined

// function multiplyTwoNumbers(n1,n2){
//    let result = n1*n2;
//    return result;
    
// }
// result = multiplyTwoNumbers(12,13)
// console.log("result : ",result);  // result :  156

function multiplyTwoNumbers(n1,n2){
   
   return n1*n2;
    
}
result = multiplyTwoNumbers(12,13)
// console.log("result : ",result);  // result : 156


// function userLoginMessage(userName){
//     return `${userName} just logged in`
// }
// console.log(userLoginMessage("Anuj"))
// console.log(userLoginMessage()) // undefined just logged in

// function userLoginMessage(userName){
//     if(!userName){
//         console.log("please enter your name");
//         return
        
//     }
//     return `${userName} just logged in`
// }
// // console.log(userLoginMessage("Anuj"))
// console.log(userLoginMessage())


// function userLoginMessage(userName = "sam"){
//     if(!userName){
//         console.log("please enter your name");
//         return
        
//     }
//     return `${userName} just logged in`
// }
// console.log(userLoginMessage("Anuj"))
// console.log(userLoginMessage())

//*******************rest operator*************** */

// function calculateCartPrice(...num){
//     return num
// }
// console.log(calculateCartPrice(200,300,400));  // rest puts all elements into an array

// function calculateCartPrice(val1,val2,...num){
//     return num
// }
// console.log(calculateCartPrice(200,300,400,2000)); // [400,2000] as val1 takes 200,val2 takes 300 and remaining takes by rest operator



let user = {
    userName : "anuj",
    price : 222
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    userName:"sam",
    price:324
})

const myNewArray = [222,333,444,555]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([666,777,888]));
