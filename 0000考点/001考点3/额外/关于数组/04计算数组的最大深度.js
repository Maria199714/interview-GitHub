function deep(arr,count=0,tt=[]) {
    for (let index=0;index<arr.length;index++){
        if(Array.isArray(arr[index])){
            count++;
            deep(arr[index],count,tt);
        }else {
            tt.push(count);
        }
    }
    return Math.max.apply(null,tt)+1;
}