//defineProperty版本

function dataBind1() {
    let data={
        text:'default'
    };
    let input=document.getElementById('input');
    let span=document.getElementById('span');
//    数据劫持
    Object.defineProperty(data,'text',{
        //    数据变化  --> 进行 修改视图
        set(newVal) {
            input.value=newVal;
            span.innerHTML=newVal;
        }
    });

//    视图更改（监听视图的变化）--->进行数据的变化
    input.addEventListener('keyup',function (e) {
        data.text=e.target.value;
    })
}



