
//浅拷贝
/*
浅拷贝出来的目标对象和源对象的指针指向的内存空间是同一块空间
即浅拷贝只是复制基本类型的数据或者指向某个对象的指针，而不是复制整个对象
 */

//浅拷贝的几种实现方式
//Object.assign()
/*
Object.assign()方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象
返回目标对象
 */
let obj={
    a:{
        a:'www',
        b:12
    }
};
let copyObj=Object.assign({},obj);
console.log(copyObj.a);