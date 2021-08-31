/*
       这是一个手写的迭代器(Iterator)，满足迭代器协议的对象。
       迭代器协议: 对象的next方法是一个无参函数，它返回一个对象，
       对象拥有done和value两个属性：
*/
function makeIterator(array) {
    var nextIndex=0;
    return{
        next:function () {
            return nextIndex<array.length
                ? {value:array[nextIndex++],done:false}
                : {value: undefined,done: true}
        }
    }
}

var it=makeIterator(['a','b']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
