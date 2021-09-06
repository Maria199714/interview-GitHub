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
/*
reduce方法：从数组的第一项，遍历迭代到数组的最后一项
参数：
第一个参数：回调函数；有4个参数
    prev：数组第一项|后面设置的值|上一次迭代的结果
    cur：当前迭代项
    index：当前迭代项索引
    array：迭代的原数组
第二个参数：设置prev的值，不写的话默认为数组的第一项。
 */
function chuanPromise(promiseFunArr) {
    promiseFunArr.reduce((pre,next)=>{
        return pre.then(next);
    },Promise.resolve())
}

var arr=[createPromise(1),createPromise(2),createPromise(3)];
chuanPromise(arr);