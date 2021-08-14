var merge = function(nums1, m, nums2, n) {
    // 看到有序数组，我们应该想到双指针
    // 定义两个指针
    let i=0;
    let j=0;
    let res=[];
    while(i<m&&j<n){
        if(nums1[i]<nums2[j]){
            res.push(nums1[i]);
            i++;
        }else{
            res.push(nums2[j]);
            j++;
        }
    }
    if(i<m){
        return res.concat(nums1.slice(i));
    }else if(j<n){
        return res.concat(nums2.slice(j));
    }else {
        return res;
    }
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));