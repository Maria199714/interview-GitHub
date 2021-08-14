//proxy版本
function dataBind2() {
    let data={
        text:'default'
    };
    let input=document.getElementById('input');
    let span=document.getElementById('span');
//    数据劫持
    let handler={
        set(target,key,value) {
            target[key]=value;
            //    数据变化-->修改视图
            input.value=value;
            span.innerHTML=value;
            return value;
        }
    };
    let proxy=new Proxy(data,handler);

//    视图更改-->数据变化
    input.addEventListener('keyup',function (e) {
        proxy.text=e.target.value;
    });
}