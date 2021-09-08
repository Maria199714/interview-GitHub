

// 手写一个apply方法
Function.prototype.myApply=function (context=window,args) {
    if(typeof this!='function'){
        throw this+'is not a function';
    }
    context.fn=this;
    const result=context.fn(...args);
    delete context.fn;
    return result;
};


//手写一个call方法
Function.prototype.myCall=function (context=window,...args) {
    if(typeof this!=='function'){
        throw this+'is not a function';
    }
    context.fn=this;//这里的this就是指的这个函数  即将这个函数作为context的方法
    const result=context.fn(...args);
    delete context.fn;//用完就删除
    return result;
};


//手写一个bind方法
Function.prototype.myBind=function (context,...args) {
    if(typeof this!='function'){
        throw this+'is not a function';
    }
    // var args=Array.prototype.slice.call(arguments,1);
    //先把 this 保存起来
    const fn=this;
    return function F() {
        //考虑 new 的方式
        if(this instanceof F){
            return new fn(...args,...arguments);
        }
        return fn.apply(context,args.concat(...arguments));
    }
};


