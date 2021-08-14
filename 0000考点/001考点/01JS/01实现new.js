
//new的四个过程：
/*
1、在内存中创建一个新的空对象
2、让构造函数的this指向这个空对象
3、执行构造函数里面的代码，给这个新对象添加属性和方法
4、返回这个对象
 */

//实现new需要传递两个参数过来，构造函数和构造函数的参数
function create(fn,...args) {
    //对输入进行判断
    if(typeof fn !='function'){
        throw 'fn is not a function';
    }
//    1+2、创建一个空对象，并给这个新对象添加构造函数的属性和方法
    var obj=Object.create(fn.prototype);
    //3、绑定this值
    var res=fn.apply(obj,args);
    //4、如果 fn 有返回值 则 作为 new 操作后的返回内容 否则返回obj对象
    return res instanceof Object?res:obj;
}
