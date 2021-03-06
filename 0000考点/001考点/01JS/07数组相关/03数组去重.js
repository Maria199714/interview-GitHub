
//数组去重方法总结
let arr=[1,1,3];



//1、使用ES6 Set去重
function unique1(arr) {
    return Array.from(new Set(arr));
    // return [...new Set(arr)];
}

console.log(unique1(arr));



//2、利用for嵌套for，然后splice去重（ES5中最常用）
function unique2() {
    for (let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
console.log(unique2(arr));

//3、使用indexOf去重
function unique3(arr) {
    let res=[];
    for (let i=0;i<arr.length;i++){
        if(res.indexOf(arr[i])===-1){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique3(arr));

//还可以使用sort()方法进行去重
//利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对
function unique4(arr) {
    arr.sort();
    let res=[arr[0]];
    for (let i=1;i<arr.length;i++){
        if (arr[i]!==arr[i-1]){
            res.push(arr[i]);
        }
    }
    return res;
}

//利用includes
function unique5(arr) {
    let res=[];
    for (let i=0;i<arr.length;i++){
        if (!res.includes(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}