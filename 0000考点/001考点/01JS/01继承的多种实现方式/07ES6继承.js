

//ES6继承 ES6支持通过类来实现继承

class Parent {
    constructor(name) {
        this.name=name;
    }
    say(){
        return 111;
    }
}

class Son extends Parent{
    constructor(name,age) {
        //调用父类的constructor(name)
        super(name);
        this.age=age;
    }
    say() {
        return 222+super.say();//调用父类的say()
    }
}

let person=new Son('lyy',111);
console.log(person.say());