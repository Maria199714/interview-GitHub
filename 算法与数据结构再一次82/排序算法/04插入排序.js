
/*
如果每摸一张牌，我们就把他插入合适的位置，使得它比后面位置的牌小，
比前面位置的牌大或者相等。
 */
function insertSort(arr) {
    for (let i=0;i<arr.length;i++){
        let j=i-1;
        let temp=arr[i];
        while (j>=0&&arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
    return arr;
}

console.log(insertSort([1,4,2,6,8,3]));