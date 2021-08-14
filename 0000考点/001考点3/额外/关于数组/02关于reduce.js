
//使用reduce对数组对象属性求和

let arr=[{a:1},{a:2}];
let res=arr.reduce((c,R)=>{
    return c+R.a;
},0);
console.log(res);