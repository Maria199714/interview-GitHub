function only(arr) {
    let res=[];
    let map=new Map();
    for (let i=0;i<arr.length;i++){
        if (map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else {
            map.set(arr[i],1);
        }
    }
    let keys=map.keys();
    for (let index of keys){
        if (map.get(index)==1){
            res.push(index);
        }
    }
    return res;
}

console.log(only([1, 2, 3, 2, 4, 4, 5, 1]));