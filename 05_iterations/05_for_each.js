// foreach

const language = ["js","cpp","rb","sw"]

// language.forEach(function (val) {   // you don't have to give the name of the function as it is a callback function
//     console.log(val);
    
// })

// language.forEach((val) =>{
//     console.log(val);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }

// language.forEach(printMe)

// language.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
    
// })

const arr = [
    {
        lang:"java",
        ext:"java"
    },
    {
        lang:"javascript",
        ext:"js"
    },
    {   
        lang:"python",
        ext:"py"
    }
]

arr.forEach((item)=>{
    console.log(item.lang);
    
})