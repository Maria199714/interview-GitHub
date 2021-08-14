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