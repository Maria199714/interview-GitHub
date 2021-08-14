function parseURL(url) {
    let paramsStr=/.+\?(.+)$/.exec(url)[1];//将？后面的字符串取出来
    let paramsArr=paramsStr.split('&');//将字符串以&分割后存到数组中
    let paramsObj={};
//    将params存到对象中
    paramsArr.forEach(param=>{
    //    处理有value的参数
        if(/=/.test(param)){
            //分割 key 和 value
            let [key,val]=param.split('=');
            val=decodeURIComponent(val);//解码
            val=/^\d+$/.test(val)?parseFloat(val):val;
            if (paramsObj.hasOwnProperty(key)){//如果对象有key，则添加一个值
                paramsObj[key]=[].concat(paramsObj[key],val);
            }else {//如果没有这个key，创建key并设置值
                paramsObj[key]=val;
            }
        }else {//处理没有value的参数
            paramsObj[param]=true;
        }
    });
    return paramsObj;
}

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parseURL(url));