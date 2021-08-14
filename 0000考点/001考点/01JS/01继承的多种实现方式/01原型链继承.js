
//原型链继承


function Parent() {
    this.name='arzh';
}
Parent.prototype.say=function () {
    console.log(this.name)
};
function Child() {

}
//主要的精髓所在
Child.prototype=new Parent();
Child.prototype.constructor=Child;

let arzhChild=new Child();
arzhChild.say();
/*
原型链继承的缺点：
1、每个实例对引用类型属性的修改都会被其他的实例共享（其中一个实例变了，其他的实例也会跟着变，牵一发而动全身）
2、在创建Child实例的时候，无法向Parent传参，Child实例没有办法自定义自己的属性。
 */





