
//1、instanceof
let arr=[1,2,3];
console.log(arr instanceof Array);


//2、Array.isArray
console.log(Array.isArray(arr));

//3、Object.getPrototypeOf
console.log(Object.getPrototypeOf(arr));

//4、Object.prototype.toString
console.log(Object.prototype.toString.call(arr));