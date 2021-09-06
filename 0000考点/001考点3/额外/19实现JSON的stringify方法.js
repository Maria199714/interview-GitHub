/*
应用场景：
1、判断对象是否相等
2、实现对象深拷贝
 */

/*
Boolean Number String会自动转换为对应的原始值
undefined、任意函数以及symbol会被忽略，如果是在对象中，转换为null
如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性被忽略
 */

function jsonStringify(obj) {
    let type=typeof obj;
    if (type !=='object'){
        if (/string|undefined|function/.test(type)){
            obj='"'+obj+'"';
        }
        return String(obj);
    }else {
        let json=[];
        let isArr=Array.isArray(obj);
        for (let key in obj){
            let val=obj[key];
            let type=typeof val;
            if (/string|undefined|function/.test(type)){
                val='"'+val+'"';
            }else if (type==='object'){
                val=jsonStringify(val);
            }
            json.push((isArr?"":'"'+key+'":')+String(val));
        }
        return (isArr?'[':'{')+String(json)+(isArr?']':'}');
    }
}

console.log(jsonStringify({x: 5}));
console.log(jsonStringify([1, false, true]));