const score = 100
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));// used mostly 

const num2 = 45.68765
// console.log(num2.toPrecision(3));// 45.7 
// console.log(num2.toPrecision(2));// 46

const num3 = 1000000
// console.log(num3.toLocaleString()); // 1,000,000
// console.log(num3.toLocaleString('en-IN')); // 10,00,000


// ***************** Maths ****************************


// console.log(Math);
// console.log(Math.abs(-5));// negative to positive thats all
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));// top value     5
// console.log(Math.floor(4.9));// bottom value     4
// console.log(Math.min(4,5,6,7,2));
// console.log(Math.max(4,9,8,1,5,));


console.log(Math.random());// always between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);








