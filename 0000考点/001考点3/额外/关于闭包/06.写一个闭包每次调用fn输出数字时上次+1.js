function fun1(n) {
    return function () {
        n++;
        console.log(n);
    }
}
var f=fun1(1);
f();
f();
f();