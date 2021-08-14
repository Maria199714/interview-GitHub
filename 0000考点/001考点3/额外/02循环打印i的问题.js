for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000)
}
/*
这里打印出来的全部是6
原因：定时器是一个异步任务，而我们会先执行主线程中的代码
for循环定义的迭代变量会渗透到循环体外部
 */


for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}

/*
这里会依次打印输出1,2,3,4,5
let定义变量的作用域仅限于for循环内部
 */