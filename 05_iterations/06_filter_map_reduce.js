const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((nums) => nums > 4)  // callback function
const newNums = myNums.filter((nums) => {
   return nums > 4
}) 
console.log(newNums);
