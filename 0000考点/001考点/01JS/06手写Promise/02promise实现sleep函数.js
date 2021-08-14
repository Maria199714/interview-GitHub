
//

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve,time));
}



//参数是时间  .then执行睡眠之后的回调函数
sleep(1000).then(()=>{
    console.log(1)
});