//用ES6手写实现简单版的Promise

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
        if (this.status===PENDING){
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        if (this.status===RESOLVED){
            onFulfilled(this.value);
        }
        if (this.status===REJECTED){
            onFulfilled(this.reason);
        }
    }
}