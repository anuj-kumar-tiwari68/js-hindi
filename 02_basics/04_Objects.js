// const tinderUser = new Object()// way 1  // singleton Object
const tinderUser = {}  // way 2  //  non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const somename ={}
somename.email = "abcs@chatgpt.com"
somename.fulName = {
    somefullname : {
        first : "lalit",
        middle : "kumar",
        last : "Sharme"
    }
}

// console.log(somename);

const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}

// const combined = Object.assign(obj2,obj1) // way 1
// const combined = Object.assign({},obj2,obj1) // way 2

const combined = {...obj1,...obj2}// correct method
// console.log(combined);
// console.log(obj1);

const users = [
    {
        id:1,
        name:'abc'
    },
     {
        id:1,
        name:'abc'
    },
     {
        id:1,
        name:'abc'
    }
]

users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

// ****************** Object destructuring *********************

const course = {
    courseName : "javascript",
    coursePrice : 999,
    teacher : "Anuj"
}

// const {teacher} = course
// console.log(teacher);
const {teacher:teach} = course
console.log(teach);

// *********** JSON ************

// {
//     'courseName' : "javascript",
//     'coursePrice' : 999,
//     'teacher' : "Anuj"
// }




//   randomuser me api

// JSON formatter