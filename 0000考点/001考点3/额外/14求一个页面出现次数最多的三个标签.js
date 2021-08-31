
function getDomCount() {
    //获取文档中所有的标签节点
    let nodes=document.querySelectorAll('*');
    let tags={};
    for (let i=0;i<nodes.length;i++){
        let tagName=nodes[i].tagName.toLowerCase();
        if(tags[tagName]){
            tags[tagName]++;
        }else {
            tags[tagName]=1;
        }
    }
    //按标签出现的次数进行降序排序
    let sortTags=Object.keys(tags).sort((a,b)=>{
        return tags[b]-tags[a];
    });
    //返回排好的前三位标签
    return sortTags.slice(0,3);
}
