// Immediately Invoked Function Expression (IIFE)

(function(){
    console.log(`Database connected`);
    
})();

// An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it's defined.
// We use IIFEs to create a private scope, avoid polluting the global namespace, and execute code immediately.

(() =>{
    console.log(`dbtwo connected`);
    
})() ;  // remember to add semicolon; after the first iffe written above

((name)=>{
    console.log(`${name} just logged in`);
    
})('Anuj')