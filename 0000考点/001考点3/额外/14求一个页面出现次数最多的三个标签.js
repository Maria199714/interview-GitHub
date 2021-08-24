
function getDomCount() {
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
    //按标签出现的次数进行排序
    let sortTags=Object.keys(tags).sort((a,b)=>{
        return tags[b]-tags[a];
    });
    return sortTags.slice(0,3);
}
