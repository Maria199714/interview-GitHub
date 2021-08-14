new Promise(function (resolve) {
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        resolve();
    },0)
}).then(function () {
    console.log(3);
});

console.log(4);
setTimeout(()=>{
    console.log(5);
},0);
setTimeout(()=>{
    console.log(6)
},1);