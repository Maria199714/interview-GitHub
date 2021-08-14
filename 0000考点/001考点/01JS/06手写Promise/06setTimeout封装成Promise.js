
function myTimeout(delay) {
    return new Promise((resolve)=>setTimeout(resolve,delay));
}

myTimeout(2000).then(()=>{
    console.log('1111');
    return myTimeout(2000)
}).then(()=>{
    console.log(2222);
});