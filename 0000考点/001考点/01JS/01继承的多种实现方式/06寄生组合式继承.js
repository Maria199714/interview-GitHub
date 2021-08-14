

//寄生组合式继承
function Parent(name) {
    this.name=name;
}
Parent.prototype.say=function () {
    console.log(1111);
};

function Child(name,age) {
    Parent.call(this,name);
    this.age=age;
}
//创建父类原型的一个副本,把副本赋值给子类原型
Child.prototype=Object.create(Parent.prototype);
Child.prototype.constructor=Child;
let person=new Child('lyy',111);
person.say();

/*
优点：
不必为了指定子类型的原型而调用父类型的构造函数
 */