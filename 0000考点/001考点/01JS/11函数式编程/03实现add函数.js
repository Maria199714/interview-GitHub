/*
经典面试题：实现add(1)(2)(3)(4)=10;add(1)(1,2,3)(2)=9;
题目的意思是：将一个接受多个参数的函数，变为接受一个参数并返回一个函数的固定形式。

这样便于再次调用 例如 f(1)(2)
即一个函数可以接收一个参数也可以接收多个参数，调用完之后，返回的是一个函数，还可以继续传参调用。

那我们就使用到闭包，这样每次传递的参数就不会消失，可以向后面传递下去。

这个好处：
可以不断的进行累积的函数调用，还可以随意的传入不定的参数。
让我们的函数更加的灵活方便。

 */

function add() {
    //将arguments类数组对象转换为数组 将传入的不定参数转换为数组对象
    var args=[...arguments];
//    最后返回的还是一个函数
    var adder=function () {
    //    把前面的传入进来的参数和现在传入进来的参数进行合并
        addArgs=[...arguments];
    //    这里返回的还是一个函数，返回自身就可以了
        return add.apply(null,args.concat(addArgs));
    };

    //toString隐式转换重写
    adder.toString=function () {
        return args.reduce(function (a,b) {
            return a+b;
        })
    };
    return adder;
}

console.log(add(1,2)(3,3,1).toString());
console.log(add(1,2)(3)().toString());


/*
柯里化其实是高阶函数的一个特殊用法

 */