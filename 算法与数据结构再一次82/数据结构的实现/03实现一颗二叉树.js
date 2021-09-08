function BinaryThree() {
    var Node=function (val) {
        this.val=val;
        this.left=null;
        this.right=null;
    };
    var root=null;

//    插入节点
    this.insert=function (val) {
        var newNode=new Node(val);
        if (root==null){
            root=newNode;
        }else {
            insertNode(root,newNode);
        }
    };

//    私有函数：新节点找到要插入的位置，并插入树
    var insertNode=function (node,newNode) {
        if (newNode.val<node.val){//node为根节点
            if (node.left==null) node.left=newNode;
            else insertNode(node.left,newNode);//递归的找到下一层，进行插入
        }else {//新节点的值大于当前节点
            if (node.right==null) node.right=newNode;
            else insertNode(node.right,newNode);
        }
    }
}