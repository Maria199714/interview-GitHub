

//将虚拟DOM转换为真实DOM结构
function parseVNode(vnode) {
    let type=vnode.type;
    let node=null;
    if(type==3){
        return document.createTextNode(vnode.value);
    }else if(type==1){
        node=document.createElement(vnode.tag);

        let data=vnode.data;
        Object.keys(data).forEach(key=>{
            let attrName=key;
            let attrValue=data[key];
            node.setAttribute(attrName,attrValue);
        });
    //    考虑子元素
        let children=vnode.children;
        children.forEach(subvnode=>{
            node.appendChild(parseVNode(subvnode));
        })
    }
    return node;
}

