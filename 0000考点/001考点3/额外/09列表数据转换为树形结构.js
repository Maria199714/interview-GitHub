var list=[
    {id: 1, name: 'child1', parentId: 0},
    {id: 2, name: 'child2', parentId: 0},
    {id: 6, name: 'child2_1', parentId: 2},
    {id: 0, name: 'root', parentId: null},
    {id: 5, name: 'child1_2', parentId: 1},
    {id: 4, name: 'child1_1', parentId: 1},
    {id: 3, name: 'child3', parentId: 0},
    {id: 7, name: 'child3_1', parentId: 3}
];
//建索引法
/*建索引法的核心是把父节点相同的子节点归类，
并根据它们父节点的id建立索引。实际上就是建立一个字典表，
父节点id作为key，子节点组成的数组作为值。
 */
function transform(list) {
    let group={};
    list.forEach((item)=>{
        let parentId=item.parentId;
        if (!group.hasOwnProperty(parentId)){
            group[parentId]=[];
        }
        group[parentId].push(item);
    });

    list.forEach(item=>{
        let id=item.id;
        if (group.hasOwnProperty(id)){
            item.children=group[id];
        }
    });

    return group["null"];
}

console.log(transform(list));


