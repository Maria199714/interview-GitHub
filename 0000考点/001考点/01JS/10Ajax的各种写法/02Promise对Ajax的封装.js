//版本2 promise实现
function ajax2(method,url) {
    let p=new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4){
                if(xhr.status>=200&&xhr.status<300){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('出错了');
                }
            }else {
                reject('请求数据失败');
            }
        };
        xhr.open(method,url,true);
        xhr.send();
    });
    return p;
}