function one(){
    const username = "Anuj"
    
    function two(){
        const website = "udemy"
        console.log(username);
        
    }
    // console.log(website);
    two()

}
// one()

if(true){
    const username = "anuj"
    if(username === "anuj"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);// error
    
}
// console.log(username);error


// ***************** hoisting ********************

console.log(addOne(5));// 6
function addOne(num){
    return num + 1
}

console.log(addTwo(5));//error due to variable assignment or you cansay  in expression
const addTwo = function(num){
    return num + 2
}

