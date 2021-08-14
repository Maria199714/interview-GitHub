
var s1 = "get_ele_ment_by_id";

function toHump(str) {
    return str.replace(/_\w/g,function (x) {
        return x.slice(1).toUpperCase();
    })
}


//  _\w 表示匹配   _[A-Za-z0-9]  ,g表示可以将字符串中满足正则表达式的全局进行替换，后面的function表示可以先将字符进行预处理之后再进行替换

console.log(toHump(s1));


//驼峰转下划线

function toLine(str) {
    return str.replace(/([A-Z])/g,"_$1").toLowerCase();
}

console.log(toLine('getEleMentById'));