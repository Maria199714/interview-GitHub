var Queue=function () {
    this.data=[];
};
//入队
Queue.prototype.enDueue=function (val) {
    this.data.push(val);
};
//出队
Queue.prototype.outDueue=function () {
    this.data.shift();
};
//获取队首
Queue.prototype.getFont=function () {
    return this.data[0];
};
//获取队尾
Queue.prototype.getWail=function () {
    return this.data[this.size()-1]
};
//获取队列的长度
Queue.prototype.size=function () {
    return this.data.length;
};
//清空队列
Queue.prototype.clear=function () {
    this.data.length=0;
};

var queue=new Queue();
