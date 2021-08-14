

//递归实现深拷贝
//对属性所有引用值进行遍历，直到是基本类型的值为止
function deepCopy(obj) {
    if(!obj||typeof obj!=='object'){
        throw new Error('error arguments')
    }
    let copyObj=Array.isArray(obj)?[]:{};
    for (let key in obj){
        //只对对象自有属性进行拷贝
        if (obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key]==='object'){
                copyObj[key]=deepCopy(obj[key]);
            }else {
                copyObj[key]=obj[key];
            }
        }
    }
    return copyObj;
}
