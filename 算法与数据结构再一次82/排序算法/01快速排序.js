
/*
快排的时间复杂度是O(n log n) 最坏的时间复杂度是O(n^2)   空间复杂度是O(log n)  不稳定
 */
/*
快速排序使用分治法，先从数组中选出一个基准
重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面
递归地把小于基准值元素的子数列和大于基准值元素的子数列排序
 */
function quickSort(arr) {
    //    4、递归的出口
    if (arr.length<=1){
        return arr;
    }
    //    1、找到基准的位置 先取数组中间位置的数作为基准
    let privotIndex=Math.floor(arr.length/2);
    let privot=arr.splice(privotIndex,1)[0];//把基准这个位置的元素取出来
    let left=[];
    let right=[];
    //    2、然后，开始遍历数组，小于基准的元素放入左边的子集，大于基准的元素放入右边的子集
    for (let i=0;i<arr.length;i++){
        if (arr[i]<privot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    //    3、最后递归不断重复这个过程，就可以得到排序后的数组
    return quickSort(left).concat([privot],quickSort(right));
}
console.log(quickSort([1, 4, 5, 2, 6, 8]));