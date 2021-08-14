
//组合式继承（原型链继承和借用构造函数合并）
function Parent(name) {
    this.name=name;
}

function Child(name,age) {
    Parent.call(this,name);
    this.age=age;
}
Child.prototype=new Parent();
Child.prototype.constructor=Child;


/*
优点：
1、解决了每个实例引用类型属性的修改都会被其他的实例共享的问题
2、子类可以向父类传参
3、可实现父类方法复用
 */

/*
缺点：
1、需要执行两次父类构造函数，造成不必要的浪费
 */