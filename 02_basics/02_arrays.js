const nums = [1,2,3,4,5]
const bool = [true,false]

// nums.push(bool)
// console.log(nums);

const array = nums.concat(bool)
// console.log(array);

const allarray = [...nums,...bool]// spread operator
// console.log(allarray);

const newArray = [1,2,3,[4,5,6],7,[8,10,[9,11]]]

const realArray = newArray.flat(Infinity)
console.log(realArray);

console.log(Array.from('Anuj'));

const s1 = 100
const s2 = 200
const s3 = 300
console.log(Array.of(s1,s2,s3));

