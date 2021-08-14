
//原型式继承   复制传入的对象到创建对象的原型上，从而实现继承

function createObj(o) {
    function F() {
        F.prototype=o;
        return new F();
    }
}

let person={
    name:'lyy'
};

let person1=createObj(person);
let person2=createObj(person);

/*
缺点：
同原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享
 */