//闭包经典使用场景

//return 回一个函数
var n=10;
function fn() {
    var n=20;
    function f() {
        n++;
        console.log(n);
    }
    return f;
}
var x=fn();
x();//21


//使用回调函数就是在使用闭包
var name='lyy';
setTimeout(function () {
    console.log(name);
});


//函数作为参数




//立即执行函数
var n=123;
(function () {
    console.log(n);
})();


//闭包的循环赋值
for (var i=0;i<10;i++){
    (function (j) {
        setTimeout(function () {
            console.log(j);
        });
    })(i);
}



