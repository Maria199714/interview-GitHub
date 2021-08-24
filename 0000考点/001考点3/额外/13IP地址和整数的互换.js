function ip2Int(ip) {
    let num=0;
    ip=ip.split('.');
    num=Number(ip[0])*256*256*256+Number(ip[1])*256*256+Number(ip[2])*256+Number(ip[3]);
    //无符号右移，保证结果的非负
    num=num>>>0;
    return num;
}

function ip2Int2(ip) {
    var num=0;
    var arr=ip.split('.');
    num+=parseInt(arr[0])<<24;
    num+=parseInt(arr[1])<<16;
    num+=parseInt(arr[2])<<8;
    num+=parseInt(arr[3])<<0;
    num=num>>>0;//这个很关键，不然可能出现负数的情况
    return num;
}



//整数转IP地址
function int2Ip(num){
    var ip="";
    var ip3=(num<<0)>>>24;
    var ip2=(num<<8)>>>24;
    var ip1=(num<<16)>>>24;
    var ip0=(num<<24)>>>24;
    ip+=ip3+'.'+ip2+'.'+ip1+'.'+ip0;
    return ip;
}
console.log(ip2Int('10.0.3.193'));
console.log(ip2Int2('10.0.3.193'));
console.log(int2Ip(167969729));