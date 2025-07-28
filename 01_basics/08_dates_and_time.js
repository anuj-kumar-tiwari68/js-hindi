// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);//  Object

// let createdDate = new Date(2024,0,12,6,30)
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());

let createdDate = new Date("2024-05-29")
// console.log(createdDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(createdDate.getTime());

// console.log(Date.now()/1000);// for seconds

let nextDate = new Date()
console.log(nextDate.getMonth())

nextDate.toLocaleString('default',{
    weekday: 'long'
})


