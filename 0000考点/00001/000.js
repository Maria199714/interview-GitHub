function getUrlParam(sUrl, sKey) {
    //先要把URL中的参数全部放到一个数组里面去
    let arr=sUrl.split('?')[1].split('&');
    let objParam={};
    for(let i=0;i<arr.length;i++){
        let temp=arr[i].split('=');
        if(objParam.hasOwnProperty(temp[0])){
            objParam[temp[0]]=[objParam[temp[0]]].push(temp[1]);
        }else{
            objParam[temp[0]]=temp[1];
        }
    }
    if(sKey==undefined){
        return objParam;
    }
}

getUrlParam('')