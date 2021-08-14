
//将真实DOM结构转换为虚拟DOM
/*
使用虚拟DOM的原因：减少回流和重绘
将DOM结构转换成对象保存到内存中

 */

//虚拟DOM的数据结构
class VNode {
    constructor(tag,data,value,type) {
        this.tag=tag && tag.toLowerCase();
        this.data=data;
        this.value=value;
        this.type=type;
        this.children=[];
    }
    appendChild(vnode){
        this.children.push(vnode);
    }
}

//使用getVNode方法将真实DOM结构转换成虚拟DOM
function getVNode(node){
    // 获取节点类型
    let nodeType=node.nodeType;
    let vnode=null;
    if(nodeType==1){
        // 元素类型:获取其属性，判断子元素，创建虚拟DOM
        let tag=node.nodeName;
        let attrs=node.attributes;
        //这个data就是虚拟DOM中的data属性
        let data={};
        for (let i=0;i<attrs.length;i++){
            data[attrs[i].nodeName]=attrs[i].nodeValue;
        }
        // 创建元素类型的虚拟DOM
        vnode=new VNode(tag,data,undefined,nodeType);
        // 考虑node的子元素
        let childNodes=node.childNodes;
        for (let i=0;i<childNodes.length;i++){
            vnode.appendChild(getVNode(childNodes[i]));
        }
    }else if (nodeType==3){
        // 文本类型：直接创建虚拟DOM
        vnode=new VNode(undefined,undefined,node.nodeValue,nodeType);
    }
    return vnode;
}

// 获取要转换的DOM结构
let root=document.querySelector('#root');
// 使用getVNode方法将 真实的DOM结构转换成虚拟DOM
let vroot=getVNode(root);
console.log(vroot);