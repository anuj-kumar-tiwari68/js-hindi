// reduce

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const initialValue = 0;
// const store = myNums.reduce( (accum,curr) => accum + curr,initialValue)
const store = myNums.reduce( (accum,curr) => {
    // console.log(`accumulator: ${accum} and current value: ${curr}`);
    
    return accum + curr
},0
)
// console.log(store);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalCost = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(totalCost);

