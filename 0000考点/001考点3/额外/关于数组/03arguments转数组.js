//定义一个伪数组
let fackArr = {
    0:'abc',
    1:'def',
    2:'igk',
    length: 3
};


//1、使用slice
let res1=Array.prototype.slice.call(fackArr);
console.log(Array.isArray(res1));


//2、


