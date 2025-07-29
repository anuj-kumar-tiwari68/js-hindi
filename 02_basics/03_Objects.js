//  Objects

//  Singleton
const mySim = Symbol('key')

const user1 = {
    name : 'Anuj',
    "full name": 'Anuj Kumar Tiwari',
    [mySim]: 'key1',
    age : 18,
    location: "ajmer",
    email: 'abcd@gmail.com',
    isLoggedIn: false,
}

// console.log(user1.location);
// console.log(user1["location"]);
// console.log(user1["full name"]);
// console.log(user1[mySim]);

user1.email = "anuj@chatgpt.com"
// console.log(user1);
// Object.freeze(user1)// no changes can be made

user1.greetings = () =>{
    console.log("Good Night");
    
}
user1.greetingsTwo = function(){
    console.log(`Good Night ,${this.name}`);
    
}
// console.log(user1.greetings);
user1.greetings();
user1.greetingsTwo();//Good Night ,undefined  because arrow fn does not have this keyword




