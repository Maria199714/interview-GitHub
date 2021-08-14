
//2、手写axios。用Promise封装Ajax，只考虑post和get请求
/*
函数返回值是一个promise对象
函数的参数是一个配置对象
{
    url: '',   // 请求地址
    method: '',   // 请求方式GET/POST/PUT/DELETE
    params: {},  // GET/DELETE请求的query参数
    data: {}, // POST或DELETE请求的请求体参数
}
 */
function myAxios({url,method='get',params={},data={}}) {
    //返回一个promise对象
    return new Promise((resolve, reject)=>{
        method=method.toUpperCase();
        // 处理query参数(拼接到url上)   id=1&xxx=abc
        let queryString='';
        Object.keys(params).forEach(key=>{
            queryString+=`${key}=${params[key]}&`;
        });
        if (queryString){
            // 去除最后的&
            queryString=queryString.substring(0,queryString.length-1);
            // 接到url
            url+='?'+queryString;
        }
        let xhr=new XMLHttpRequest();
        xhr.open(method,url,true);
        if(method==='GET'||method==='DELETE'){
            xhr.send();
        }else if(method==="POST"||method==='PUT'){
            // 告诉服务器请求体的格式是json
            xhr.setRequestHeader('Content-Type','application/json;charset=utf-8');
            // 发送json格式请求体参数
            xhr.send(JSON.stringify(data));
        }

        xhr.onreadystatechange=function () {
            if (xhr.readyState==4){
                if(xhr.status>=200&&xhr.status<300){
                    resolve(JSON.parse(xhr.responseText));
                }else {
                    reject(new Error('出错了'));
                }
            }else {
                reject(new Error('请求失败'));
            }
        }
    });
}
