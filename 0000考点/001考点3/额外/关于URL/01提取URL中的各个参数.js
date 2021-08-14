function getUrl(url) {
    let res={};
    url=url.split('?')[1];
    let groups=url.split('&');
    for (let i=0;i<groups.length;i++){
        let temp=groups[i].split('=');
        res[temp[0]]=decodeURIComponent(temp[1]);
    }
    return res;
}

console.log(getUrl('http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'));