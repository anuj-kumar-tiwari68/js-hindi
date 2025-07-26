
// Primitive

// 7 types : String , Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const value = 100.2

const isLoggedIn = true
const outsideTemp = null
let userAge;

const id = Symbol('123')
const nextId = Symbol('123')

// console.log(id === nextId);// false

const bigNumber = 23456789234556678n


// Reference Type

// Array, Objects, Functions


const heroes = ['cap','iron','thor','hulk']
let Obj ={
    name:'abc',
    age: 34,
}
myFun();// hoisting
function myFun(){
    console.log("hello World");
    
}


// console.log(typeof bigNumber);



//********************************************************************************* */

// Stack(Primitive)(copy) and heap(non-primitive)(reference) memory


let myYoutubeName = 'abcgdh'

let anotherName = myYoutubeName
anotherName = 'anuj'


// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "abcd@gmail.com",
    id: "user@ybl"
}

let userTwo = userOne
userTwo.email= "zyx@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


