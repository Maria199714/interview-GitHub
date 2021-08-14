/*
堆排序可以说是一种利用堆的概念来排序的选择排序。
堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
<1>.将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；
<2>.将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,......Rn-1)和新的有序区(Rn),且满足R[1,2...n-1]<=R[n]；
<3>.由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,......Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，
得到新的无序区(R1,R2....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
 */
function heapSort(array) {
    for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
        adjustHeap(array, i, array.length);
    }
    for (let j = array.length - 1; j > 0; j--) {
        const temp = array[0];
        array[0] = array[j];
        array[j] = temp;
        adjustHeap(array, 0, j);
    }
    return array;
}

function adjustHeap(array, i, length) {
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        const temp = array[i];
        if (j + 1 < length && array[j] < array[j + 1]) {
            j++;
        }
        if (temp < array[j]) {
            array[i] = array[j];
            array[j] = temp;
            i = j;
        } else break;
    }
}

console.log(heapSort([1, 5, 2, 4, 8]));