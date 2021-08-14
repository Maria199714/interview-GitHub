

//深拷贝才能实现真正意义上的拷贝
/*
和浅拷贝只复制对象指针不同
深拷贝会另外创造一个一模一样的对象，新对象和源对象不会互相干扰，修改新对象不会影响源对象
 */

//JSON正反序列化 JSON.parse()和JSON.stringify()
let obj={
    nam:'lyy',
    friend:{
        name:'www'
    }
};
let copyObj=JSON.parse(JSON.stringify(obj));
console.log(copyObj);