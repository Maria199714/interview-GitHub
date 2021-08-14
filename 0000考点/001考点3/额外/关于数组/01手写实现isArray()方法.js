Array.myIsArray=function (arg) {
    return Object.prototype.toString.call(arg)==='[object Array]'
};

console.log(Array.myIsArray([]));