var Stack=function () {
    this.data=[];
};
//入栈
Stack.prototype.push=function (val) {
    this.data.push(val);
};
//出栈
Stack.prototype.pop=function () {
    return this.data.pop();
};
//栈顶元素
Stack.prototype.top=function(){
    return this.data[this.size()-1];
};
//清空栈
Stack.prototype.clear=function () {
    this.data.length=0;
};
Stack.prototype.size=function () {
    return this.data.length;
};

var stack=new Stack();
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack);