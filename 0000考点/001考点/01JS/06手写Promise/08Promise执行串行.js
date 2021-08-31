/*
使用数组的reduce方法，reduce方法里有四个参数，pre next index arr
如果then方法里返回的是一个promise对象，
那么执行下一个then的时候必定是在上一个then执行完之后执行
 */

function createPromise(time) {
    return (resolve,reject)=>{
        new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('time'+time);
                resolve();
            },time*1000)
        });
    }
}

function chuanPromise(promiseFunArr) {
    promiseFunArr.reduce((pre,next)=>{
        return pre.then(next);
    },Promise.resolve())
}

var arr=[createPromise(1),createPromise(2),createPromise(3)];
chuanPromise(arr);