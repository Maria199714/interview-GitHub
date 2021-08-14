/*
<1>.把长度为n的输入序列分成两个长度为n/2的子序列；
<2>.对这两个子序列分别采用归并排序；
<3>.将两个排序好的子序列合并成一个最终的排序序列。
 */
//归并排序的实现
function mergeSort(arr) {
    let len=arr.length;
    //处理递归的出口 即边界情况
    if (len<=1) return arr;
    //计算分割点
    let mid=Math.floor(len/2);
    //递归分割 左子数组，然后合并为 有序数组
    let leftArr=mergeSort(arr.slice(0,mid));
    //递归分割 右子数组，然后合并为 有序数组
    let rightArr=mergeSort(arr.slice(mid,len));
    //合并 左右两个有序数组
    arr=mergeArr(leftArr,rightArr);
    // 返回合并后的结果
    return arr;
}
function mergeArr(arr1,arr2) {
    //初始化两个指针
    let i=0;
    let j=0;
    //初始化结果数组
    let res=[];
    let len1=arr1.length;
    let len2=arr2.length;
    //合并两个子数组
    while (i<len1&&j<len2){
        if (arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }else {
            res.push(arr2[j]);
            j++;
        }
    }
    //若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if (i<len1){
        return res.concat(arr1.slice(i));
    }else if (j<len2){
        return res.concat(arr2.slice(j));
    }else {
        return res;
    }
}


console.log(mergeSort([1,4,2,6,8,21]));