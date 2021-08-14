
//借用构造函数（经典继承）
function Parent(name) {
    this.name=name;
}

function Child(name) {
    Parent.call(this,name);
}

let person=new Child('lyy');
console.log(person.name);


/*
优点：
1、解决了每个实例对引用类型属性的修改被其他的实例共享的问题（即解决了牵一发而动全身的问题）
2、子类可以向父类传参
 */

/*
缺点：
1、无法复用父类的公共函数
2、每次子类构造实例都得执行一次父类函数
 */