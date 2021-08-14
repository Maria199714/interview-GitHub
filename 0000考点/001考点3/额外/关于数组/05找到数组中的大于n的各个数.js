

Array.prototype.findDuplicate=function (n) {
    if (isNaN(n)) return [];
    n=n<1?1:n;
    let res=[];
    let obj=Object.create(null);
    this.forEach(item=>{
        obj[item]=(obj[item]||0)+1;
        if (obj[item]>=n){
            res.push(item);
        }
    });
    //去重之后返回数组
    return Array.from(new Set(res));
};


console.log([1,2,3,4,1,2,2,2].findDuplicate(5) );