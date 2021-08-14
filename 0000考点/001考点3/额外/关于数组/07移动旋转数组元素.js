
//给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
/*
unshift() 方法将把它的参数插入数组的头部，
并将已经存在的元素顺次地移到较高的下标处，该方法不会创建新数组，
而是直接修改原数组。
pop() 方法将删除数组的最后一个元素，把数组长度减 1，
并且返回它删除的元素的值
 */

const rotate = function (nums, k) {
    const l = nums.length;
    k = k % l;
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};