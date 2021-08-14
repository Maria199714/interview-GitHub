async function async1() {
    console.log('async1 start');//2
    await async2();
    console.log('async1 end');//6
}
async function async2(){
    console.log('async2');//3
}

console.log('script start');//1

setTimeout(()=>{
    console.log('setTimeOut')//8
},0);

async1();

new Promise(function (resolve) {
    console.log('promise1');//4
    resolve();
}).then(function () {
    console.log('promise2')//7
});

console.log('script end');//5



/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeOut
 */



/*
await的意思就是要等其右侧的表达式完成。
在没有完成之前，await会让出线程，阻塞下面一行代码的执行，
先去执行async外面的代码，等外面的   同步代码   执行完毕之后，
才会继续回来执行里面的后面的代码。
把async里的代码执行完毕之后，再去执行微任务和宏任务。
 */