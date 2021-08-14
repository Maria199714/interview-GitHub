//1、普通的递归实现
function flatten(arr) {
    let res=[];
    for (let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(flatten(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}


//2、使用reduce函数迭代实现
function flatten2(arr) {
    return arr.reduce((pre,next)=>{
        return pre.concat(Array.isArray(next)?flatten2(next):next);
    },[]);
}

//3、使用ES6的flat方法
function flatten3(arr) {
    return arr.flat(Infinity);
}


//4、使用split和toString共同处理
function flatten4(arr) {
    return arr.toString().split(',');
}