const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("This is my resolved data");
        reject("Rejected Promise...");
    }, 2000);
    
 
})
console.log('before...')

promise.then((data) => {
    console.log('1', data)
}).catch((data)=> console.log('error: ', data))

promise.then((data) => {
    console.log('2', data)
})

console.log('after...')