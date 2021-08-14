/*
它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

 */
function bubbleSort(arr) {
    let len=arr.length;
    for (let i=0;i<len;i++){
        for (let j=0;j<len-1-i;j++){
            if (arr[j]>arr[j+1]){//相邻元素两两相比  元素交换
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1,4,1,3,9]));