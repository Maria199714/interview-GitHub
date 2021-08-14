/*
是简单插入排序的改进版
它与插入排序的不同之处在于，它会优先比较距离较远的元素。
希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。
 */

/*
先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
<1>. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
<2>.按增量序列个数k，对序列进行k 趟排序；
<3>.每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。
 */
function shellSort(arr) {
    let len=arr.length;
    let gap=Math.floor(len/2);
    for (gap;gap>0;gap=Math.floor(gap/2)){
        for (let i=gap;i<len;i++){
            let j=i-gap;
            let temp=arr[i];
            while (j>=0&&arr[j]>temp){
                arr[j+gap]=arr[j];
                j-=gap;
            }
            arr[j+gap]=temp;
        }
    }
    return arr;
}

console.log(shellSort([1, 4, 6, 2, 9]));

