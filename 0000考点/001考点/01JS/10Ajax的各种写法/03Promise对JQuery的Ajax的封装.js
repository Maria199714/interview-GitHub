//版本3 Promise对JQuery的Ajax的封装
var ajax3=function (methods,url,param) {
    return new Promise((resolve, reject)=>{
        $.ajax({
            type:methods,
            url:url,
            data:param,
            dataType:'json',
            success:function (data) {
                resolve(data);
            },
            error:function (error) {
                reject(error);
            }
        })
    });
};