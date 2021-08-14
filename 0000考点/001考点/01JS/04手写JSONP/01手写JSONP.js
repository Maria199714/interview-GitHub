
//手写JSONP
function jsonp({url,params,callbackName}) {
    function generateUrl() {
        let dataSrc='';
        for (let key in params){
            if(params.hasOwnProperty(key)){
                dataSrc+=`${key}=${params[key]}&`;
            }
        }
        dataSrc+=`callback=${callbackName}`;
        return `${url}?${dataSrc}`;
    }

    return new Promise((resolve, reject)=>{
        let script=document.createElement('script');
        script.src=generateUrl();
        document.body.appendChild(script);
        window[callbackName]=function (data) {
            resolve(data);
            document.body.removeChild(script);
        }
    });
}