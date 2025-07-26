const name = "anuj"
const repoCount = 10

// console.log(name + repoCount + "value");// not recommended as it is old

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const myName = new String('AnujKT')
// console.log(myName[0]);
// console.log(myName.__proto__);//{}

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(5));
// console.log(myName.indexOf('K'));

const newString = myName.substring(0,4)
// console.log(newString);

const anotherString = myName.slice(-4,4)
// console.log(anotherString);

const newStr = "    anuj    "
// console.log(newStr);
// console.log(newStr.trim());


const url = "https://www.google%20.com/"
console.log(url.replace('%20','-'));

console.log(url.includes('google'))

// split 



