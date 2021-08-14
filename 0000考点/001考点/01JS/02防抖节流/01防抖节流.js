// fn是用户传入需要防抖的函数
// delay是等待时间
function myDebounce(fn,delay) {
    //缓存一个定时器Id
    let timer=null;
    // 这里返回的函数是每次用户实际调用的防抖函数
    // 如果已经设定过定时器了就清空上一次的定时器
    // 开始一个新的定时器，延迟执行用户传入的方法
    return function (...args) {
        if(timer){
            clearTimeout(timer);
        }
        timer=setTimeout(()=>{
            fn.apply(this,args);
        },delay)
    }
}



function myThrottle(func, delay) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                func.apply(this, args);
            }, delay)
        }
    }
}
