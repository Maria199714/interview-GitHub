// 用栈

// 输入： 一个包含.. 和. 的相对路径
// 输出： 一个绝对路径

function f(s){

    const stk = [];

    // 先分割为数组
    const arr = s.split("/")
    // console.log(arr);

    // console.log(arr);
    //入栈
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === '..') stk.pop(); // 出栈一个路径
        else if(arr[i] === '.' || arr[i] === '') continue;
        else stk.push(arr[i]);
    }

    // console.log(stk);

    if(stk.length === 0) return '/'
    //
    let res = '/';
    res += stk.join('/');
    return res;
}


// const s = 'a/b/c/.././' /a/b
// const s = 'a/../../..'  '/
const s = '/A/B/../C/D/../E'
const res = f(s)
console.log(res);