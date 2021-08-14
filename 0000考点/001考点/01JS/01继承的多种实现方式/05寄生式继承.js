
//寄生式继承
/*
我们可以使用Object.create来代替原型式继承中的createObj的实现
寄生式继承其实就是在createObj的内部以某种形式来增强对象（比如可以为对象添加方法）
最后返回增强之后的对象
 */

function createEnhanceObj(o) {
//    代替原型式继承的createObj
    let clone=Object.create(o);
    clone.say=function () {
        console.log(1111)
    };
    return clone;
}

let person={
    name:'lyy'
};

let person1=createEnhanceObj(person);
person1.say();

/*
优点：
通过createEnhanceObj就可以在创建对象的时候，把对象方法也通过此种方式继承
 */

/*
缺点：
同借用构造函数一样，无法复用父类函数，每次创建对象都会再创建一遍方法
 */