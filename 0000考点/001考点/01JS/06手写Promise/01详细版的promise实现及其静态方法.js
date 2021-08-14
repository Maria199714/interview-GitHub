
//用ES6手写实现Promise
const PENDING='pending';
const FULFILLED='fulfilled';
const REJECTED='rejected';

class Promise {
    constructor(executor) {
        this.status=PENDING;
        this.value=null;
        this.reason=null;
        this.onFulfilledCallbacks=[];
        this.onRejectedCallbacks=[];

        let resolve=(value)=>{
            if(this.status===PENDING){
                this.status=FULFILLED;
                this.value=value;
                this.onFulfilledCallbacks.forEach((fn)=>fn());
            }
        };

        let reject=(reason)=>{
            if(this.status===PENDING){
                this.status=REJECTED;
                this.reason=reason;
                this.onRejectedCallbacks.forEach((fn)=>fn());
            }
        };

        try {
            executor(resolve,reject);
        }catch (e) {
            reject(e);
        }
    }


    //then方法的实现
    then(onFulfilled,onRejected){
        //    解决onFulfilled,onRejected没有传值的问题
        onFulfilled=typeof onFulfilled==='function'?onFulfilled:(v)=>v;
        //    因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
        onRejected=typeof onRejected==='function'?onRejected:(err)=>{
            throw err;
        };
        /*
        新增then方法的链式调用，即每次调用then都返回一个新的promise
        为了链式调用这里直接创建一个Promise，并在后面return出去
         */
        let promise2=new Promise((resolve,reject)=>{

            let fulfilledSetTimeout=()=>{
                setTimeout(()=>{
                    try {
                        let x=onFulfilled(this.value);
                        //    x可能是一个promise
                        resolvePromise(promise2,x,resolve,reject);
                    }catch (e) {
                        reject(e);
                    }
                },0)
            };

            let rejectSetTimeout=()=>{
                setTimeout(()=>{
                    try {
                        let x=onRejected(this.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    }catch (e) {
                        reject(e);
                    }
                },0)
            };


            if (this.status===FULFILLED){
                fulfilledSetTimeout();
            }

            if(this.status===REJECTED){
                rejectSetTimeout();
            }

            if (this.status===PENDING){
                this.onFulfilledCallbacks.push(fulfilledSetTimeout);
                this.onRejectedCallbacks.push(rejectSetTimeout);
            }

        });
        return promise2;
    }
}

const resolvePromise=(promise2,x,resolve,reject)=>{
//    自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise
    if(promise2===x){
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
//    只能调用一次
    let called;
    if((typeof x==='object'&&x!=null)||typeof x==='function'){
        try {
            // 为了判断 resolve 过的就不用再 reject 了
            let then=x.then;
            if(typeof then==='function'){
                // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty
                then.call(x,(y)=>{
                    // 根据 promise 的状态决定是成功还是失败
                    if(called) return;
                    called=true;
                    // 递归解析的过程（因为可能 promise 中还有 promise）
                    resolvePromise(promise2,y,resolve,reject);
                },(r)=>{
                    // 只要失败就失败
                    if (called) return;
                    called=true;
                    reject(r);
                });
            }else {
                // 如果 x.then 是个普通值就直接返回 resolve 作为结果
                resolve(x);
            }

        }catch (e) {
            if (called) return ;
            called=true;
            reject(e);
        }
    }else {
    //    如果 x 是个普通值就直接返回 resolve 作为结果
        resolve(x);
    }
};



/*
Promise.resolve(value) 可以将任何值转成值为 value ,状态是 fulfilled 的 Promise，
但如果传入的值本身是 Promise 则会原样返回它。
 */
Promise.resolve=function (value) {
    // 如果是 Promise，则直接输出它
    if (value instanceof Promise){
        return value;
    }
    return new Promise(resolve=>resolve(value));
};

/*
Promise.reject() 会实例化一个 rejected 状态的 Promise。
但与 Promise.resolve() 不同的是，如果给 Promise.reject() 传递一个 Promise 对象，
则这个对象会成为新 Promise 的值。
 */
Promise.reject=function (reason) {
    return new Promise((resolve,reject)=>reject(reason));
};


/*
Promise.all的规则：
传入的所有promise都是fulfilled，则返回由他们的值组成的，状态为fulfilled的新promise
只要有一个promise是rejected，则返回rejected状态的新promise，且它的值是第一个rejected的promise值
只要有一个promise是pending，则返回一个pending状态的新promise
 */
Promise.all=function (promiseArr) {
    let index=0;
    let result=[];
    return new Promise((resolve,reject)=>{
        promiseArr.forEach((p,i)=>{
            Promise.resolve(p).then(val=>{
                index++;
                result[i]=val;
                if (index===promiseArr.length){
                    resolve(result);
                }
            },err=>{
                reject(err);
            })
        })
    })
};


/*
Promise.allSettled接受的结果与入参时的promise实例一一对应，
且结果的每一项都是一个对象
 */
Promise.allSettled=function (promiseArr) {
    let result=[];
    return new Promise((resolve,reject)=>{
        promiseArr.forEach((p,i)=>{
            Promise.resolve(p).then(val=>{
                result.push({
                    status:'fulfilled',
                    value:val
                });
                if (result.length===promiseArr.length){
                    resolve(result);
                }
            },err=>{
                result.push({
                    status:'rejected',
                    reason:err
                });
                if (result.length===promiseArr.length){
                    resolve(result);
                }
            })
        })
    })
};



/*
Promise.race会返回一个由所有可以迭代实例中第一个fulfilled或rejected的实例包装后的新实例
 */
Promise.race=function (promiseArr) {
    return new Promise((resolve,reject)=>{
        promiseArr.forEach(p=>{
            Promise.resolve(p).then(val=>{
                resolve(val);
            },err=>{
                reject(err);
            })
        })
    })
};



/*
Promise.finally无论当前 Promise 是成功还是失败，
调用finally之后都会执行 finally 中传入的函数，
并且将值原封不动的往下传。
 */
Promise.finally=function (callback) {
    this.then(value=>{
        return Promise.resolve(callback()).then(()=>{
            return value;
        })
    },error=>{
        return Promise.resolve(callback()).then(()=>{
            return error;
        })
    })
};



//链接 https://juejin.cn/post/6946022649768181774#heading-38


