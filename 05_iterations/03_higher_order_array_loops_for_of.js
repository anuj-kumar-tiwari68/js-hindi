// for of

// ["","",""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }


// Maps

const map = new Map()
map.set("In","India")
map.set("US","USA")
map.set("Fr","France")
map.set("Fr","France") // maps are known values and maintaining order so it will not print france again

console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key,value] of map) {
    console.log(key,'=>',value);
    
}

// for of does not work on onjects